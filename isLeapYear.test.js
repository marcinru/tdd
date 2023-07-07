import { isLeapYear } from './isLeapYear'

test('1900 is not leap year', () => {
    expect(isLeapYear(1900)).toBe(false)
})

test('2000 is leap year', () => {
    expect(isLeapYear(2000)).toBe(true)
})

test('2001 is not leap year', () => {
    expect(isLeapYear(2001)).toBe(false)
})

test('2004 is leap year', () => {
    expect(isLeapYear(2004)).toBe(true)
})

test('2049 is not leap year', () => {
    expect(isLeapYear(2049)).toBe(false)
})

test('2080 is leap year', () => {
    expect(isLeapYear(2080)).toBe(true)
})
