// return nth element of Fibonacci sequence
export const fibNum = (n) => {
  let prePrev = 0;
  let prev = 1;
  let current = 0;

  if (n === 1) {
    return prePrev;
  }

  if (n === 2) {
    return prev;
  }

  for (let i = 2; i < n; i++) {
    current = prePrev + prev;
    prePrev = prev;
    prev = current;
  }
  return current;
}
