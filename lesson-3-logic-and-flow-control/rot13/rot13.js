function isUpper(letter) {
  return /[A-Z]/.test(letter);
}

function isLower(letter) {
  return /[a-z]/.test(letter);
}

function isNotLetter(letter) {
  return /[^a-z]/i.test(letter);
}

function changedCase(oldLetter, newLetter) {
  if (isUpper(oldLetter) && !isUpper(newLetter)) {
    return true;
  } else if (isLower(oldLetter) && !isLower(newLetter)) {
    return true;
  }

  return false;
}

function correctRotation(oldLetter, newLetter) {
  const CASE_CORRECTION = 26;

  if (changedCase(oldLetter, newLetter)) {
    newLetter = String.fromCharCode(newLetter.charCodeAt(0) - CASE_CORRECTION);
  }

  return newLetter;
}

function rotateLetter(originalLetter) {
  const ROTATION = 13;
  let charCode = originalLetter.charCodeAt(0);
  let rotatedLetter = String.fromCharCode(charCode + ROTATION);

  rotatedLetter = correctRotation(originalLetter, rotatedLetter);

  return rotatedLetter;
}

function rot13(string) {
  let newString = '';

  for (let index = 0; index < string.length; index++) {
    if (isNotLetter(string[index])) {
      newString += string[index];
    } else {
      newString += rotateLetter(string[index]);
    }
  }

  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'))
// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(
  rot13(rot13('Teachers open the door, but you must enter by yourself.'))
)
// logs:
// Teachers open the door, but you must enter by yourself.
