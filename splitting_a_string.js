function splitString(string, delimiter) {
  var length = string.length - 1;
  var i = 0;
  var newWord = '';

  while (i <= length) {
    do {
      if (string[i] === delimiter) { continue; }
      newWord += string[i];
      if (delimiter === '') { break; }
      i++;
    } while (string[i] !== delimiter && i <= length);

    console.log(newWord);
    newWord = '';
    i++;
  }
}

exports.f = splitString;