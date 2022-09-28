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

    describe("encoding", () => {
        it("should correctly translate a message based on the given alphabet", () => {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "jrufscpw";
            expect(actual).to.equal(expected);
        });

        it("should leave spaces as is", () => {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "elp xhm xf mbymwwmfj dne";
            expect(actual).to.equal(expected);
        });

        it("should allow a submitted alphabet to contain special characters", () => {
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
            const expected = "y&ii$r&";
            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters", () => {
            const lower = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            const upper = substitution("ThInKfUl", "xoyqmcgrukswaflnthdjpzibev");
            expect(lower).to.equal(upper);
        });
    });

    describe("decoding", () => {
        it("should correctly decode a message based on the given alphabet", () => {
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });

        it("should leave spaces as is", () => {
            const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = "you are an excellent spy";
            expect(actual).to.equal(expected);
        });

        it("should allow a submitted alphabet to contain special characters", () => {
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "message";
            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters", () => {
            const lower = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
            const upper = substitution("JrUfScPw", "xoyqmcgrukswaflnthdjpzibev", false);
            expect(lower).to.equal(upper);
        });
    });
});