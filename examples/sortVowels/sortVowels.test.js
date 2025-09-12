import { sortVowels } from './sortVowels.js';

describe('sortVowels', () => {
  it('does not change input if there are no vowels', () => {
    expect(sortVowels('lYmpH')).toBe('lYmpH');
  });

  it('sorts only vowels', () => {
    expect(sortVowels('lEetcOde')).toBe('lEOtcede');
  });
});
