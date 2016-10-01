function checkGoldbach(n) {
  var found = false;
  for (var i = n - 1; i > Math.floor(n / 2); i--) {
    if (isPrime(i)) {
      if (isPrime(n - i)) {
        found = true;
        console.log(i + ' ' + (n - i));
      }
    }
  }
  if (!found) { return null }
}

function isPrime(num) {
  for (var i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false
    }
  }
  if (num < 2) { return false; }
  return true;
}

