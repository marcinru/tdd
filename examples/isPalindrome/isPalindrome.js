export const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  const strArr = x.toString().split('');
  const midIndex = Math.floor(strArr.length / 2);
  const left = strArr.slice(0, midIndex).join('');
  const index = strArr.length % 2 === 0 ? midIndex : midIndex + 1;
  const right = strArr.slice(index, strArr.length).reverse().join('');
  return left === right;
}
