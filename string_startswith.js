function startsWith(string, searchString) {
  for (var i = 0; i <= searchString.length - 1; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}

exports.f = startsWith;