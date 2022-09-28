// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    describe("encoding", () => {
        it("should return a value of the type 'string'", () => {
            const actual = polybius("message");
            expect(actual).to.be.a('string');
        });

        it("should encode a message by translating each letter into a coordinate pair", () => {
            const actual = polybius("thinkful");
            const expected = "4432423352125413";
            expect(actual).to.equal(expected);
        });

        it("should translate both 'i' and 'j' to 42", () => {
            const actual = polybius("justice");
            const expected = "42543444423151";
            expect(actual).to.equal(expected);
        });
    });
});