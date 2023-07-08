import {fibSeq} from './fibSeq';

describe('fibSeq(n)', function () {
    it('returns [0, 1] for n = 2', () => {
        expect(fibSeq(2)).toEqual([0, 1])
    })

    it('returns [0, 1, 1] for n = 3', () => {
        expect(fibSeq(3)).toEqual([0, 1, 1])
    })

    it('returns [0, 1, 1, 2, 3, 5, 8, 13] for n = 8', () => {
        expect(fibSeq(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
    })
});
