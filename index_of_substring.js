function indexOf(firstString, secondString) {
  for (var i = 0; i <= firstString.length - secondString.length; i++) {
    if (firstString[i] === secondString[0]) {
      var match = true;
      for (var j = 1; j < secondString.length; j++) {
        if (firstString[i + j] !== secondString[j]) {
          match = false;
        }
      }
      if (match) { return i };
    }

  }
  return -1
}

function lastIndexOf(firstString, secondString) {
  for (var i = firstString.length - secondString.length; i >= 0; i--) {
    if (firstString[i] === secondString[0]) {
      var match = true;
      for (var j = 1; j < secondString.length; j++) {
        if (firstString[i + j] !== secondString[j]) {
          match = false;
        }
      }
      if (match) { return i };
    }

  }
  return -1
}

exports.a = indexOf;
exports.b = lastIndexOf;