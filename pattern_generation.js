function generatePattern(num) {
  var pattern = "";
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
      pattern += j
    }
    for (var j = 0; j < num - i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

exports.f = generatePattern;