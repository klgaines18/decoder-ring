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

        it("should ignore capital letters", () => {
            const actual = polybius("Hello");
            const expected = "3251131343";
            expect(actual).to.equal(expected);
        });

        it("should leave spaces as is", () => {
            const actual = polybius("Hello World");
            const expected = "3251131343 2543241341";
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding", () => {
        it("should return false if length of input is odd", () => {
            const actual = polybius("325113134", false);
            expect(actual).to.be.false;
        });

        it("should encode a message by translating each coordinate pair into a letter", () => {
            const actual = polybius("3251131343", false);
            const expected = "hello";
            expect(actual).to.equal(expected);
        });

        it("should translate 42 into '(i/j)'", () => {
            const actual = polybius("4432423352125413", false);
            const expected = "th(i/j)nkful";
            expect(actual).to.equal(expected);
        });

        it("should leave spaces as is", () => {
            const actual = polybius("3251131343 2543241341", false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
        });
    });
});