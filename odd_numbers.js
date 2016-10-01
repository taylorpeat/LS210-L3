function printOddNumbers(num) {
  for (var i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

exports.f = printOddNumbers;