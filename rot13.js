function rot13(string) {
  var transformedString = '';

  for (var i = 0; i < string.length; i++) {
    var charCode = string.charCodeAt(i);
    transformedString += String.fromCharCode(rot13CharCode(charCode));
  }

  return transformedString;
}

function rot13CharCode(charCode) {
  if (notAlpha(charCode)) { return charCode; }

  var alphaLoc = charCode % 32 - 1;
  var newAlphaLoc = (alphaLoc + 13) % 26;
  return charCode - alphaLoc + newAlphaLoc;
}

function notAlpha(charCode) {
  return charCode < 65 || charCode > 90 && charCode < 97 || charCode > 122;
}