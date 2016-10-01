function printMultiples(num) {
  for (var i = 100; i > 0; i--) {
    if (i % num === 0 && i % 2 === 1) {
      console.log(i);
    }
  }
}

exports.f = printMultiples;