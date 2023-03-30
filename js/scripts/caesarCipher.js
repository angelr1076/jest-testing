const lowerCase = str => str.toLowerCase();

const caesarsCipher = (str, shiftFactor) => {
  if (shiftFactor < 0 || shiftFactor > 26) return false;
  let lowerCaseStr = lowerCase(str);
  let cipherText = '';

  for (let i = 0; i < lowerCaseStr.length; i++) {
    let asciiCode = lowerCaseStr.charCodeAt(i);

    if (/[a-z]/.test(lowerCaseStr[i])) {
      asciiCode += shiftFactor;
      if (asciiCode > 122) {
        asciiCode -= 26;
      } else if (asciiCode < 97) {
        asciiCode += 26;
      }
    }

    cipherText += String.fromCharCode(asciiCode);
  }

  return cipherText;
};

export { caesarsCipher };
