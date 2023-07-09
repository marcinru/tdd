import {fibNum} from './fibNum';

describe('fibNum(n)', () => {
    it('should return 0 for n = 1', () => {
        expect(fibNum(1)).toBe(0)
    })

    it('should return 1 for n = 2', () => {
        expect(fibNum(2)).toBe(1)
    })
})
