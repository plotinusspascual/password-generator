// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var pwdCharLower = "0123456789abcdefghijklmnopqrstuvwxyz";
var pwdCharUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwdCharSpecial = "!@#$%^&*()";

var pwdCharLowerArr = pwdCharLower.split('');
var pwdCharUpperArr = pwdCharUpper.split('');
var pwdCharSpecialArr = pwdCharSpecial.split('');

var generatePwd = {
  
}