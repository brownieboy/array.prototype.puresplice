(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.arraypuresplice = mod.exports;
    }
})(this, function () {
    "use strict";

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    if (typeof Array.pureSplice === "undefined") {
        Array.prototype.pureSplice = function (start) {
            var deleteCount = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
            // eslint-disable-line no-extend-native
            try {
                var newArray = [].concat(_toConsumableArray(this.slice(0, start)), _toConsumableArray(this.slice(start + deleteCount)));
                return newArray;
            } catch (e) {
                return this;
            }
        };
    }
});
