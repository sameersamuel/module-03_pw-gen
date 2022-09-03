// All characters available to be used for password

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];
var specialChar = ["!","#","$","%","&","(",")","*","+","-","/","<","=",">","?","@","^","_","`"];

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// This functions gives the user instructions on the parameters of the password and offers choices
function generatePassword() {
  var userPwLength = prompt("Between 8 and 128 characters, how long do you want your password?");
  var passwordLength = parseInt(userPwLength);

  // if the user doesn't specify the length of characters in number this alerts them to USE A NUMER 
  if (isNaN(passwordLength)) {
    alert("Please give me a NUMBER.")
    return;
  };

  // this alerts the user if they enter a character length less than 8
  if (passwordLength < 8) {
    alert("Password must be AT LEAST 8 characters long.");
    return;
  }

  // this alerts the user if they enter a character longer than 128
  if (passwordLength > 128) {
    alert("Password must be LESS THAN 128 characters long");
    return;
  };

  
  // these prompts give the user the option to choose what characters they want in their password
  var chooseLower = confirm("Want to include Lower Case in your password?");
  var chooseUpper = confirm("Want to include Upper Case in your password?");
  var chooseNum = confirm("Want to include Numbers Case in your password?");
  var chooseSpecial = confirm("Want to include Special Characters in your password?");
  
  // if the user doesn't choose any characters for their password they will be alerted 
  if( chooseLower === false &&
      chooseUpper === false &&
      chooseNum === false &&
      chooseSpecial === false
    ) {
      alert("You are going to have to choose something if you want a password.");
      return;
    }
  
  // what ever characters the user chooses will be pushed into this array
  var charChoice = [];
  var randomPassword = "";
    if (chooseLower === true) {
      charChoice = charChoice.concat(lower)
  }
    if (chooseUpper === true) {
      charChoice = charChoice.concat(upper)
    }
    if (chooseNum === true) {
      charChoice = charChoice.concat(numeric)
    }
    if (chooseSpecial === true) {
      charChoice = charChoice.concat(specialChar)
    }

  // This loop randomizes the user's choice of characters and length
    console.log(charChoice);
  for (var i = 0; i < passwordLength; i++) {
    
    let randomIndex = Math.floor(Math.random()* charChoice.length);
    console.log("randomIndex = " , randomIndex);
    randomPassword += charChoice [randomIndex]; // === randomPassword = randomPassword + charChoice [randomIndex];
    // console.log("randomPassword = ", randomPassword);  
   }
  return randomPassword;

};
 
// Write password to the #password input
function writePassword() { 
  var password = generatePassword(); 
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
