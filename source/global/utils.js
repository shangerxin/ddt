/**
 * Created by shange on 9/7/2016.
 */

/*===========================Utils start==============================================*/
var utils = (function () {
    const CODE    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var lookup    = [...CODE];
    var revLookup = [];

    for (let i = 0, len = CODE.length; i < len; ++i) {
        lookup[i]                     = CODE[i];
        revLookup[CODE.charCodeAt(i)] = i
    }
    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;

    function utf8ToUtf16le(s) {
        var a = new Uint8Array(s.length * 2), view = new DataView(a.buffer);
        s.split('').forEach(function(c, i) {
            //the third parameter equal to true indicate little ending
            view.setUint16(i * 2, c.charCodeAt(0), true);
        });
        return a;
    }

    var utils = {
        toArrayBuffer          : function (b64) {
            var i, j, l, tmp, placeHolders, arr;
            var len = b64.length;

            if (len % 4 > 0) {
                throw new Error('Invalid string. Length must be a multiple of 4')
            }

            // the number of equal signs (place holders)
            // if there are two placeholders, than the two characters before it
            // represent one byte
            // if there is only one, then the three characters before it represent 2 bytes
            // this is just a cheap hack to not do indexOf twice
            placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

            // base64 is 4/3 + up to two characters of the original data
            arr = new Uint8Array(len * 3 / 4 - placeHolders);

            // if there are placeholders, only get up to the last complete 4 chars
            l = placeHolders > 0 ? len - 4 : len;

            var L = 0;

            for (i = 0, j = 0; i < l; i += 4, j += 3) {
                tmp      = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
                arr[L++] = (tmp >> 16) & 0xFF;
                arr[L++] = (tmp >> 8) & 0xFF;
                arr[L++] = tmp & 0xFF
            }

            if (placeHolders === 2) {
                tmp      = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
                arr[L++] = tmp & 0xFF
            }
            else if (placeHolders === 1) {
                tmp      = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
                arr[L++] = (tmp >> 8) & 0xFF;
                arr[L++] = tmp & 0xFF
            }

            return arr.buffer;
        },
        assertString           : function (data) {
            if (!_.isString(data)) {
                throw new TypeError("The data parameter must be an String");
            }
        },
        assertBinary           : function (data) {
            if (!this.isBinary(data)) {
                throw new TypeError("The data parameter must be an ArrayBuffer or Blob");
            }
        },
        isBinary               : function (data) {
            //edwin:
            //We need to handle the break prototype chain in the Firefox and Chrome extension by check the constructor name
            return data instanceof ArrayBuffer || data instanceof Blob || data.__proto__.constructor.name == "ArrayBuffer" || data.__proto__.constructor.name == "Blob";
        },
        /*
         Check a give path(directory or file) should be contained when export as runtime in TC
         @path, is a string which
         @scriptName, is the script name which not contain any file extension which is used to
         dynamic generate the two additional runtime files cript-name.prm and
         script-name.usr
         @return bool
         */
        safeCallback           : function (callback) {
            if (callback) {
                return (result)=> {
                    let isCalled = false;
                    if (!isCalled) {
                        isCalled = true;
                        return callback(result);
                    }
                };
            }
            else {
                return callback;
            }
        },
        /*
         * abstract a folder array from a given path. ex path = '/a/b/c/d.txt', will return
         * ['a', 'b', 'c']
         */
        abstractFolders        : function (path) {
            let frags = path.split("/");
            if (!path.endsWith("/")) {
                frags.pop();
            }

            return frags;
        },
        pathNormalize          : function (path) {
            return path.trim().replace(/\\/gi, "\/").replace(/\/{2,}/, "\/");
        },
        pathSplit              : function (path) {
            path      = this.pathNormalize(path);
            let index = path.lastIndexOf("\/");

            if (index == NOT_FOUND) {
                return ["", path];
            }
            else {
                let filename = path.substr(index + 1, path.length) || "";
                let dir      = path.substr(0, path.length - filename.length);
                return [dir, filename];
            }
        },
        /*
         * get the file extension without the dot if exist else return an empty string
         */
        getFileExtension       : function (path) {
            let fileName = this.getFileName(path);
            let dotIndex = fileName.lastIndexOf(".");
            if (dotIndex == NOT_FOUND) {
                return "";
            }
            else {
                //exclude the dot itself
                return fileName.substring(dotIndex + 1).toLowerCase();
            }
        },
        getFileName            : function (path) {
            return this.pathSplit(path)[1];
        },
        getFileFrontName       : function (path) {
            let fileName = this.pathSplit(path)[1];
            let pieces   = fileName.split(".");
            let frontName;
            if (pieces.length >= 1) {
                pieces.pop();
                frontName = pieces.join(".");
            }
            else {
                frontName = pieces[0];
            }
            return frontName;
        },
        pathJoin               : function (...pathSlices) {
            let path = "";
            for (let slice of pathSlices) {
                slice = this.pathNormalize(slice);
                if (!path) {
                    path += slice;
                }
                else {
                    path += "\/" + slice;
                }
            }

            return path.replace(/\/+/g, "\/");
        },
        suffixWithSlash        : function (path) {
            path = this.pathNormalize(path);
            if (path) {
                if (path[path.length - 1] != "/") {
                    return path + "/";
                }
                else {
                    return path;
                }
            }
            else {
                return "/";
            }
        },
        count                  : function (iterable, value, start = 0) {
            let count = 0;
            _.each(iterable, (x, i)=> {
                if (value == x && i >= start) {
                    count++;
                }
            });
            return count;
        },
        /*
         convert array buffer to string
         */
        ab2str                 : function (buf) {
            var dataView = new DataView(buf);
            var decoder  = new TextDecoder('utf-8');
            return decoder.decode(dataView);
        },
        /*
         convert string to array buffer
         */
        str2ab                 : function (buf) {
            var encoder = new TextEncoder('utf-8');
            return encoder.encode(buf).buffer;
        },

        /*
         * convert utf16 int array to string
         */
        utfToString: function (d) {
            if (d && !_.isString(d)) {
                let buf     = this.isBinary(d) ? new Uint8Array(d) : Uint8Array.from(d);
                let decoder = new TextDecoder(utils.guessEncoding(d));
                let decoded = decoder.decode(buf);
                return decoded;
            }
            else {
                return d;
            }
        },

        /*
         * convert string to utf16le Uint8Array, use Uint8Array.buffer to get
         * ArrayBuffer. By default we export the script content without BOM
         */
        stringToUtf16le: function (s) {
            this.assertString(s);
            if (s) {
                return utf8ToUtf16le(s);
            }
            else {
                return utf8ToUtf16le("");
            }
        },

        /*
         * Check if the version0 is greater than the version1
         *
         * @param {string} version0 is like #.#.#.#
         * @param {string} version1 is like #.#.#.#
         * @return {boolean} the result
         */
        isSupportedVersion: function (versionX, versionY) {
            let versionRegex = /\d+\.\d+\.\d+\.\d+/;
            if (versionX.match(versionRegex) && versionY.match(versionRegex)) {
                let versionXArray = versionX.split(".");
                let versionYArray = versionY.split(".");
                if (versionXArray.length == versionYArray.length) {
                    //ignore the last two version number, only compare the major and minor version
                    for (var i = 0; i < 2; i++) {
                        if (versionXArray[i] > versionYArray[i]) {
                            return true;
                        }
                        else if (versionXArray[i] < versionYArray[i]) {
                            return false;
                        }
                    }
                    return true; //equal version
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        },

        /*
         * guess the encoding of the given string or int array. the default encoding type is utf-16le
         */
        guessEncoding: function (d) {
            let buf;
            if (d) {
                if (_.isString(d)) {
                    return ENCODING_UTF8;
                }
                else {
                    buf = this.isBinary(d) ? new Uint8Array(d) : Uint8Array.from(d);
                }

                if (buf.length > 3) {
                    let header = buf.slice(0, 3);
                    if (_.isEqual(BOM_UTF8, header)) {
                        return ENCODING_UTF8;
                    }

                    header = header.slice(0, 2);
                    if (_.isEqual(BOM_UTF16BE, header)) {
                        return ENCODING_UTF16BE;
                    }

                    if (_.isEqual(BOM_UTF16LE, header)) {
                        return ENCODING_UTF16LE;
                    }

                    if (header[0] == 0 && header[1] != 0) {
                        return ENCODING_UTF16BE;
                    }
                    else if (header[0] != 0 && header[1] == 0) {
                        return ENCODING_UTF16LE;
                    }
                    else {
                        return ENCODING_UTF8;
                    }
                }
                else {
                    return ENCODING_UTF8;
                }
            }
        },

        getGUID(){
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        }
    };
    return utils;
})();

exports.utils = utils;
/*===========================Utils end================================================*/