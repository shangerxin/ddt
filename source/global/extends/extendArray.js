/**
 * Created by shange on 10/6/2016.
 */
let {CONST} = require("../const");

Array.prototype.deleteByValue = function(value){
    let index = this.indexOf(value);
    if(index != CONST.NOT_FOUND){
        this.splice(index, 1);
        return true;
    }
    else{
        return false;
    }
};

Array.prototype.deleteByIndex = function(index){
    this.splice(index, 1);
};

Array.prototype.insert = function(index, value){
    this.splice(index, 0, value);
};

