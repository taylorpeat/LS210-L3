function toLowerCase(string) {
  var transformedString = '';
  var charCode;

  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);
    if (charCode <= 90 && charCode >= 65) {
      transformedString += String.fromCharCode(charCode + 32);
    } else {
      transformedString += string[i];
    }
  }

  return transformedString;
}

exports.f = toLowerCase;