function gcd(n1, n2) {
  var min = Math.min(n1, n2);
  for (var i = min; i > 0; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i;
    }
  }
}

exports.f = gcd;
