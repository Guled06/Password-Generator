// Assignment Code


var generateBtn = document.querySelector("#generate");

function generatePassword() {
  return "password";
}
// Write password to the #password input
function writePassword() {

  parseInt(prompt("Please choose between 5 and 10"));
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

