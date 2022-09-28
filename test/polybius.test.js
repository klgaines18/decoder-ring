// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    describe("encoding", () => {
        it("should return a value of the type 'string'", () => {
            actual = polybius("message");
            expect(actual).to.be.a('string')
        });
    });
});