function multiplesOfThreeAndFive() {
  for (var i = 0; i <= 100; i++) {
    var num = i;
    if (i % 3 !== 0 && i % 5 !== 0) { continue }
    if (i % 3 === 0 && i % 5 === 0) { num += '!' }
    console.log(num);
  }
}

exports.f = multiplesOfThreeAndFive;