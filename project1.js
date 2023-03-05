function palindrome(str) {

  const newStr = str
    .replace(/[\W^_]/g, '')
    .toLowerCase();

  const reversed = newStr
    .split('')
    .reverse()
    .join('');

  return newStr === reversed;
}

console.log(palindrome('neuquen'))