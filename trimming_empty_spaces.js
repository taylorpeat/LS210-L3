function trim(string) {
  var i = 0;
  var end = string.length - 1;
  var newWord = "";
  
  while (string[i] === " ") {
    i++;
  }
  
  while (string[end] === " ") {
    end--;
  }

  for (; i <= end; i++) {
    newWord += string[i];
  }

  return newWord;
}

exports.f = trim;