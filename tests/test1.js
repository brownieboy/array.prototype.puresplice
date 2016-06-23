/* eslint-env node, chai, mocha */

var chai = require("chai");
var expect = chai.expect;
// This will add array.prototype.pureSplice() method.  Remember to
// to run `npm run build` first!
require("../index.js");

var getSourceArray = require("./data/getsourcearray.js");

var sourceArray = getSourceArray();

console.log("sourceArray = " + JSON.stringify(sourceArray));

describe("Test 1: removing an array element using array.splice()", function() {
    it("new array should have 3 elements", function() {
        var newArray = sourceArray.pureSplice(1, 1);    // Should remove 'koala' from array
        // console.log("newArray = " + JSON.stringify(newArray));
        expect(newArray.length)
            .to.equal(2, JSON.stringify(newArray));
    });

    it("source array should still have 4 elements", function() {
        // console.log("sourceArray = " + JSON.stringify(sourceArray));
        expect(sourceArray.length)
            .to.equal(4, JSON.stringify(sourceArray));
    });
});
