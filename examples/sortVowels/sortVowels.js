export function sortVowels(s) {
  const input = s.split('');
  const vowels = 'AEIOUaeiou';
  const sortedVowels = input.filter((char) => vowels.includes(char)).sort();
  let output = '';
  let vowelIndex = 0;

  input.forEach((char) => {
    if (vowels.includes(char)) {
      output += sortedVowels[vowelIndex];
      vowelIndex += 1;
    } else {
      output += char;
    }
  });
  return output;
}
