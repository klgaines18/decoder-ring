// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    describe("error handling", () => {
        it("should return false if alphabet is not given", () => {
            const actual = substitution("message");
            expect(actual).to.be.false;
        });
    });
});