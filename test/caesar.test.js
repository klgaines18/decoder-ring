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

    it("should return false if shift is greater than 25", () => {
        const actual = caesar("message", 26);
        expect(actual).to.be.false;
    })

    it ("should encode a message by shifting letters by the given shift value", () => {
        const actual = caesar("message", 8);
        const expected = "umaaiom";
        expect(actual).to.equal(expected);
    })

    it("should ignore capital letters", () => {
        const lower = caesar("message", 3);
        const upper = caesar("MeSsAgE", 3);
        expect(lower).to.equal(upper);
    })

    it("should leave spaces and symbols as is", () => {
        const actual = caesar("This is a message!", 8);
        const expected = "bpqa qa i umaaiom!";
        expect(actual).to.equal(expected);
    })

    it("should handle shifts that go past end of alphabet", () => {
        const actual = caesar("zebra magazine", 3);
        const expected = "cheud pdjdclqh";
        expect(actual).to.equal(expected);
    })
});