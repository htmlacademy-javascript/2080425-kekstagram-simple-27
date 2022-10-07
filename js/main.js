// © https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  if {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    return NaN;
  }
}


// © https://github.com/htmlacademy-javascript/237031-kekstagram-simple-27/pull/2/files
let checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength ('test test test', 10);
