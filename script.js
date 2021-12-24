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
var pwdNumbers = "0123456789";

// Seperating string to make an array 
var pwdCharLowerArr = pwdCharLower.split('');
var pwdCharUpperArr = pwdCharUpper.split('');
var pwdCharSpecialArr = pwdCharSpecial.split('');
var pwdCharNumArr = pwdNumbers.split('');

//WHEN prompted for the length of the password                  
//THEN I choose a length of at least 8 characters and no more than 128 characters 
function generatePassword(){
  var lengthOfPwd = (prompt("How many characters do you want your password to be?"));
  
  while(lengthOfPwd < 8 && lengthOfPwd < 128){
    alert("Password must be at least 8 characters long and at most 128 characters long");
    break;
  }
  //----Next prompts asked----
  //WHEN asked for character types to include in the password
  //THEN I confirm whether or not to include lowercase, uppercase, numeric, 
  // and/or special characters
  var caseOfPwd
}
  
