// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should return false if shift value is equal to 0", () => {
        const actual = caesar("message", 0);
        expect(actual).to.be.false;
    });

    it("should return false if shift is less than -25", () => {
        const actual = caesar("message", -26);
        expect(actual).to.be.false;
    })
});