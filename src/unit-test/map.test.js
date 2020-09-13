// map(arg1,arg2)
// map([1,2,3], x => x*2) returns [2,4,6]

import { map } from './map';

const { expect } = require("chai");

describe('Map function - Basic functionality', () => {

    it('returns empty array when empty array is passed', () => {
        const actual = map([], x => x);
        const expected = [];
        expect(actual).to.deep.equal(expected);
    });

    it('returns the same array when array is passed', () => {
        const actual = map([1,2,3], x => x);
        const expected = [1,2,3];
        expect(actual).to.deep.equal(expected);
    });

    it('returns double the number when number array is passed', () => {
        const actual = map([1,2,3], x => x*2);
        const expected = [2,4,6];
        expect(actual).to.deep.equal(expected);
    });

    it('returns uppercase for the lowercase alaphabet array', () => {
        const actual = map(['a','b','c'], x => x.toUpperCase());
        const expected = ['A','B','C'];
        expect(actual).to.deep.equal(expected);
    });

    it('returns null when array is passed as null', () => {
        const actual = map(null, x => x.toUpperCase());
        const expected = null;
        expect(actual).to.deep.equal(null);
    });
    
});
