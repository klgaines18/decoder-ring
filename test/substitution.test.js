// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    describe("error handling", () => {
        it("should return false if alphabet is not given", () => {
            const actual = substitution("message");
            expect(actual).to.be.false;
        });

        it("should return false if alphabet is longer than 26 characters", () => {
            const actual = substitution("thinkful", "axoyqmcgrukswaflnthdjpzibev$");
            expect(actual).to.be.false;
        });

        it("should return false if alphabet is shorter than 26 characters", () => {
            const actual = substitution("thinkful", "short");
            expect(actual).to.be.false;
        });

        it("should return false if all characters in alphabet are not unique", () => {
            const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        });
    });
});