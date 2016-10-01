function guessPassword() {
  gs = 0;
  password = "password";

  while (gs <= 3) {
    var attempt = prompt("What is the password:");
    
    if (attempt === password) {
      alert("You have successfully logged in.");
      return;
    }
    
    gs++
  }

  alert("You have been denied access.");

}