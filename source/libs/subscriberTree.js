/**
 * Created by shange on 10/6/2016.
 */
let Handler = function (context, isOneTime, fn, node) {
    this.context   = context;
    this.fn        = fn;
    this.isOneTime = isOneTime;
    this._node     = node;
};

Handler.prototype = {
    remove(){
        return this._node.removeHandler(this.fn);
    }
};

let Node = function (topic) {
    this.topic    = topic;
    this.handlers = [];
    this.children = new Map();
};

Node.prototype = {
    get(topic){
        return this.children.get(topic);
    },

    set(topic, node){
        return this.children.set(topic, node);
    },

    has(topic){
        return this.children.has(topic);
    },

    removeHandler(fn){
        if (typeof fn === "function") {
            let handlers = this.handlers;
            for (var i = 0; i < handlers.length; i++) {
                if (handlers[i].fn == fn) {
                    handlers.splice(i, 1);
                    return true;
                }
            }
            return false;
        }
        else {
            throw new TypeError("Argument error, only accept function or Handler instance!");
        }
    }
};

let SubscriberTree = function () {
    this._root = new Node("");
};

SubscriberTree.prototype = {
    get root() {
        return this._root;
    },

    addSubscriber(topicPath, fn, context){
        if (typeof fn === "function") {
            let node = this.buildTopicPath(topicPath);
            node.handlers.push(new Handler(context, false, fn, node));
            return true;
        }
        return false;
    },

    addOneTimeSubscriber(topicPath, fn, context){
        if (typeof fn === "function") {
            let node = this.buildTopicPath(topicPath);
            node.handlers.push(new Handler(context, true, fn, node));
            return true;
        }
        return false;
    },

    removeSubscriber(topicPath, fn){
        let node = this.find(topicPath);
        if (node) {
            return node.removeHandler(fn);
        }
        else {
            return false;
        }
    },

    walkAlongPath: function *(topicPath) {
        var curNode = this.root;
        for (let topic of _getTopics(topicPath)) {
            let child = curNode.get(topic);
            yield child;
            curNode = child;
        }
    },

    walkDownPath: function *(topicPath) {
        let curNode = this.find(topicPath);
        let queue   = [];
        while (curNode) {
            yield curNode;
            for (let node of curNode.children.values()) {
                queue.push(node);
            }

            if (queue.length) {
                curNode = queue.shift();
            }
            else {
                break;
            }
        }
    },

    buildTopicPath(topicPath){
        let curNode = this.root;
        _getTopics(topicPath).forEach((topic)=> {
            if (curNode.has(topic)) {
                curNode = curNode.get(topic);
            }
            else {
                let child = new Node(topic);
                curNode.set(topic, child);
                curNode = child;
            }
        });
        return curNode;
    },

    find(topicPath){
        for (var node of this.walkAlongPath(topicPath)) {
            if (!node) {
                return;
            }
        }
        return node;
    }
};

function _getTopics(topicPath) {
    topicPath = topicPath.replace(/\\+|\/+/g, "/");
    topicPath = topicPath.startsWith("/") ? topicPath.substr(1) : topicPath;
    topicPath = topicPath.endsWith("/") ? topicPath.substr(0, topicPath.length - 1) : topicPath;
    return topicPath.split("/");
}

exports.SubscriberTree = SubscriberTree;

