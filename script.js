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
var pwdCharLower = "abcdefghijklmnopqrstuvwxyz";
var pwdCharUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwdCharSpecial = "!@#$%^&*()";
var pwdNumbers = "0123456789";

// Seperating string to make an array 
const pwdCharLowerArr = pwdCharLower.split('');
const pwdCharUpperArr = pwdCharUpper.split('');
const pwdCharSpecialArr = pwdCharSpecial.split('');
const pwdCharNumArr = pwdNumbers.split('');

//WHEN prompted for the length of the password                  
//THEN I choose a length of at least 8 characters and no more than 128 characters 
function generatePassword(){
  var newPassword = [];
  var lengthOfPwd = (prompt("How many characters do you want your password to be?"));
  
  while(lengthOfPwd < 8 && lengthOfPwd < 128){
    alert("Password must be at least 8 characters long and at most 128 characters long");
    break;
  }
  //----Next prompts asked----
  //WHEN asked for character types to include in the password
  //THEN I confirm whether or not to include lowercase, uppercase, numeric, 
  // and/or special characters
  var lowCapOfPwd = (confirm("would you like lowercase letters?"));
    if(lowCapOfPwd == true){
      newPassword = newPassword.concat(pwdCharLowerArr);
      console.log(newPassword);
    }

  var UppCapOfPwd = (confirm("would you like uppercase letters?"));
    if(UppCapOfPwd == true){
      newPassword = newPassword.concat(pwdCharUpperArr);
      console.log(newPassword);
    }
  
  var genPassword = [];  

  for(var i=0; i<=lengthOfPwd; i++){
    genPassword = genPassword + newPassword[Math.floor((Math.random() * newPassword.length))];
    newPassword.push(genPassword)
    console.log(genPassword);
  }
  return genPassword;
  }
  
