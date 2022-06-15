// Assignment code here
// Establishing character array constants, and setting the default password length to 8 characters if the user does not give an input.
var passwordSize = 8;
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numeric = ["0","1", "2" , "3", "4", "5", "6", "7", "8", "9"];
const special = ["!","?","@","#","$","%","^","&","*","/"];
// input box selectors
var lowerCaseInput = document.getElementById("lowercase");
var upperCaseInput = document.getElementById("uppercase");
var numericInput = document.getElementById("numeric");
var specialInput = document.getElementById("special");
var passwordOutput = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
// arrays for use in functions
var usableCharacters = [];
var passwordArray = [];

// function to use the chosen parameteres to create the list of allowed characters. Validates that the user has allowed at least 1 category. 

function generateArray() {
  var tempArray = [];
  if(lowerCaseInput.checked) {
    tempArray.push(...lowerCase);
  } if (upperCaseInput.checked) {
    tempArray.push(...upperCase);
  } if (numericInput.checked) {
    tempArray.push(...numeric);
  } if (specialInput.checked) {
    tempArray.push(...special);
  }
  usableCharacters = tempArray;
  if (usableCharacters.length === 0) {
    window.alert("Please select at least 1 group of characters!");
  } else {
    return usableCharacters;
  }
}

// function to generate the password given user's parameters randomly using a 'for' loop.

function generatePassword() {
  generateArray();
  passwordArray = [];
  passwordSize = document.getElementById("size").value;
  if (passwordSize == 0){ 
    passwordSize = 8;
  }
  for (i = 0; i < passwordSize; i++) {
    var random = Math.floor(Math.random() * usableCharacters.length);
    passwordArray.push(usableCharacters[random]);
    }
  passwordOutput.textContent = passwordArray.join('');
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
