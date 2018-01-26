const monkeyTrouble = require("../index.js");
const chai = require("chai");
const assert = chai.assert;

const tests = {
    case1: { aSmile: true, bSmile: true },
    case2: { aSmile: false, bSmile:false },
    case3: { aSmile: true, bSmile: false },
    case4: { aSmile: false, bSmile: true }
}

describe("Testing monkeyTrouble function", function() {
    it("should return true", function() {
        assert.equal(monkeyTrouble(tests.case1.aSmile, tests.case1.bSmile), true);
    });
    it("should return true", function() {
        assert.equal(monkeyTrouble(tests.case2.aSmile, tests.case2.bSmile), true);
    });   
    it("should return false", function() {
        assert.equal(monkeyTrouble(tests.case3.aSmile, tests.case3.bSmile), false);
    }); 
    it("should return false", function() {
        assert.equal(monkeyTrouble(tests.case4.aSmile, tests.case4.bSmile), false);
    }); 
})