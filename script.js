// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var passwordFresh = []

  var passWord = prompt("Enter a password length");
  passWord = parseInt(passWord);

  if (passWord < 8) {
    alert ("Password must have more than 7");
    return "";
  }

  if (passWord > 128) {
    alert("Password must be less than 128");
    return "";
  }

  var lowerCase = confirm("Would you like lower case letters to be included in your password?");

  var upperCase = confirm("Would you like upper case letters to be included in your password?");

  var numbers = confirm("Would you like numbers to be included in your password?");

  var specialCharacters = confirm("Would you like special characters included in your password?");


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
