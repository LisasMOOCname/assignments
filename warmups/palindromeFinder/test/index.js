const isPalindrome = require("../index.js");
const chai = require("chai");
const assert = chai.assert;

const tests = {
    case1: "Star Rats!",
    case2: "palindrome",
    case3: "Madam, I made radio! So I dared! Am I mad?? Am I?"
}

describe("Testing isPalindrome function", function() {
    it("should return true", function() {
        assert.equal(isPalindrome(tests.case1), true);
    });
    it("should return true", function() {
        assert.equal(isPalindrome(tests.case2), false);
    });
    it("should return false", function() {
        assert.equal(isPalindrome(tests.cases3), true);
    });
})
