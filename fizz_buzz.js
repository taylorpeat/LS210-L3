function fizzBuzz() {
  for (var i = 0; i <= 100; i++) {
    var word = '';

    if (i % 3 === 0) {
      word += "Fizz";
    } else if (i % 5 === 0) {
      word += "Buzz";
    } else {
      word = i;
    }
    
    console.log(word);
  }
}

exports.f = fizzBuzz;