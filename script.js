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

// Available Characters to use
var pwdCharLower = "0123456789abcdefghijklmnopqrstuvwxyz";
var pwdCharUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwdCharSpecial = "!@#$%^&*()";

// Seperating string to make an array 
var pwdCharLowerArr = pwdCharLower.split('');
var pwdCharUpperArr = pwdCharUpper.split('');
var pwdCharSpecialArr = pwdCharSpecial.split('');

// Prompt for length of characters
function generatePassword(){
  var lengthOfPwd = (prompt("How many characters do you want your password to be?"));
  
  while(lengthOfPwd < 8 && lengthOfPwd < 128){
    alert("Password must be at least 8 characters long and at most 128 characters long");
    break;
  }
}
  
