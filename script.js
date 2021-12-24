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

var pwdCharArray = pwdCharLower.split('');
var pwdCharArray = pwdCharUpper.split('');
var pwdCharArray = pwdCharSpecial.split('');

var generatePwd = {
  
}