// Assignment code here
var input;
var choices;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecialChars;

lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", 
"(", ")", "<", ">", "?", ",", ".", "/", "-", "_", "=", "+"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function() {
  ps = writePassword();
});

// Write password to the #password input
// Write password to the #password input
function writePassword() {
  input = window.prompt("Password length: Enter a number between 8 and 128.");
  var num = parseInt(input);
  if (!num) {
    window.alert("Need a proper value!");
  }
  else if (num < 8 || num > 128) {
    window.alert("You need to enter a number between 8 and 128!");
  }
  else {
    confirmLowercase = confirm("Will this contain lowercase letters?");
      if (confirmLowercase) {
        window.alert("The password WILL contain lowercase letters.");
      }
      else {
        window.alert("The password WILL NOT contain lowercase letters.");
      }
    confirmUppercase = confirm("Will this contain uppercase letters?");
      if (confirmUppercase) {
        window.alert("The password WILL contain uppercase letters.");
      }
      else {
        window.alert("The password WILL NOT contain uppercase letters.");
      }
    confirmNumber = confirm("Will this contain numbers?");
      if (confirmNumber) {
        window.alert("The password WILL contain numbers.");
      }
      else {
        window.alert("The password WILL NOT contain numbers.");
      }
    confirmSpecialChars = confirm("Will this contain special characters?");
      if (confirmSpecialChars) {
        window.alert("The password WILL contain special characters.");
      }
      else {
        window.alert("The password WILL NOT contain special characters.");
      }
  }
  // all falses
  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecialChars) {
    choices = window.alert("You need to choose at least one option!");
  }
  //all trues
  else if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecialChars) {
    choices = lowercase.concat(uppercase, number, specialChars);
  }
  //three trues one false
  else if (confirmLowercase && confirmUppercase && confirmNumber) {
    choices = lowercase.concat(uppercase, number);
  }
  else if (confirmLowercase && confirmUppercase && confirmSpecialChars) {
    choices = lowercase.concat(uppercase, specialChars);
  }
  else if (confirmLowercase && confirmNumber && confirmSpecialChars) {
    choices = lowercase.concat(number, specialChars);
  }
  else if (confirmUppercase && confirmNumber && confirmSpecialChars) {
    choices = uppercase.concat(number, specialChars);
  }
  //two trues two falses
  else if (confirmLowercase && confirmUppercase) {
    choices = lowercase.concat(uppercase);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = lowercase.concat(number);
  }
  else if (confirmLowercase && confirmSpecialChars) {
    choices = lowercase.concat(specialChars);
  }
  else if (confirmUppercase && confirmNumber) {
    choices = uppercase.concat(number);
  }
  else if (confirmUppercase && confirmSpecialChars) {
    choices = uppercase.concat(specialChars);
  }
  else if (confirmNumber && confirmSpecialChars) {
    choices = number.concat(specialChars);
  }
  //one tru 3 falses
  else if (confirmLowercase) {
    choices = lowercase;
  }
  else if (confirmUppercase) {
    choices = uppercase;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmSpecialChars) {
    choices = specialChars;
  }
  var password = [];

  for (var i = 0; i < input; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  var ps = password.join("");
  UserInput(ps);
  return ps;
};
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

