// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphaBet = "abcdefghijklmnopqrstuvwxyz"

var lettErs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var digiTs = "0123456789"


function generatePassword () {
  var newPasswordArray = [];

  var passwordFresh = prompt("Please enter a password length");
  passwordFresh = parseInt(passwordFresh);

  if (passwordFresh < 8) {
    alert ("Password must have more than 7 characters:");
    return "";
  }

  if (passwordFresh > 128) {
    alert("Password must not be more than 128 characters:");
    return "";
  }

  var lowerCase = confirm("Would you like lower case letters to be included in your password?");

  var upperCase = confirm("Would you like upper case letters to be included in your password?");

  var numbers = confirm("Would you like numbers to be included in your password?");

  var passwordOptions = [];

  if (lowerCase) {
    passwordOptions.push("lowercase");
  }

  if (upperCase) {
    passwordOptions.push("uppercase");
  }

  if (numbers) {
    passwordOptions.push("numbers");
  }

  
  for (var i = 0; i < passwordFresh; i++) {

    var randomCharacter = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];

    if (randomCharacter === "numbers") {
      
      var randomNumber = digiTs.charAt(Math.floor(Math.random() * digiTs.length));
      newPasswordArray.push(randomNumber); 
    } else if (randomCharacter === "uppercase") {
      var randomUper = lettErs.charAt(Math.floor(Math.random() * lettErs.length));
      newPasswordArray.push(randomUper)
    } else if (randomCharacter === "lowercase") {
      var randomLower = alphaBet.charAt(Math.floor(Math.random() * alphaBet.length));
      newPasswordArray.push(randomLower)
    } console.log(newPasswordArray);
  } return newPasswordArray.join("");


}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
