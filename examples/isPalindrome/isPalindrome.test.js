import {isPalindrome} from "./isPalindrome.js";

describe('isPalindrome', () => {
    it('returns true for 121', () => {
        expect(isPalindrome(121)).toBe(true);
    });

    it('returns false for -121', () => {
        expect(isPalindrome(-121)).toBe(false);
    });

    it('returns false for 10', () => {
        expect(isPalindrome(10)).toBe(false);
    });

    it('returns true for 8976006798', () => {
        expect(isPalindrome(8976006798)).toBe(true);
    });

    it('returns true for 89760106798', () => {
        expect(isPalindrome(89760106798)).toBe(true);
    });

    it('returns false for 89760016798', () => {
        expect(isPalindrome(89760016798)).toBe(false);
    });
});
