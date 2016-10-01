function repeat(string, times) {
  var output = '';

  if (typeof times !== "number" || times < 0) { return undefined }

  for (var i = 1; i <= times; i++) {
    output += string;
  }

  return output;
}

exports.f = repeat;