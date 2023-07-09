import {fibNum} from './fibNum';

describe('fibNum(n)', () => {
    it('should return 0 for n = 1', () => {
        expect(fibNum(1)).toBe(0)
    })

    it('should return 1 for n = 2', () => {
        expect(fibNum(2)).toBe(1)
    })

    it('should return 1 for n = 3', () => {
        expect(fibNum(3)).toBe(1)
    })

    it('should return 13 for n = 8', () => {
        expect(fibNum(8)).toBe(13)
    })
})
