var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var uppercase = confirm ("Your password should have an uppercase letter! Click OK to continue");
  var lowercase = confirm ("Your password should have a lowercase letter! Click OK to continue");
  var symbols = confirm ("Your password should have a symbol! Click Ok to continue");
  var numbers = confirm ("Your password should have a number! Click OK to continue");
  var KeyLength = prompt ("Your Password must be between 8 and 128 characters! Click OK to continue");
 

  var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase ="abcdefghijklmnopqrstuvwxyz";
  var specialsymbols ="!@#$%^&*()_-=+?<>/?";
  var nummerics ="1234567890";
  var multiSelect = [];

  if (KeyLength < 8 || KeyLength > 128 ) {
    alert ("Your password does not meet the criteria");
    var KeyLength = prompt ("Passord must be between 8 and 128 characters in length");
  }

  if (uppercase === false && lowercase === false && specialsymbols === false && nummerics === false) {
    return "Your password does not meet the password critieria";
  };

  var uppercase = confirm ("Your password should have an uppercase letter!");
  var lowercase = confirm ("Your password should have a lowercase letter !");
  var specialsymbols = confirm ("Your password should have a symbol!");
  var nummerics = confirm ("Your password should have a number!");
  

  if (lowercase) {multiSelect += lowercase}
  if (uppercase) {multiSelect += uppercase;}
  if (nummerics) {multiSelect += numbers;}
  if (specialsymbols) {multiSelect += symbols;}

  let finalPassword = ""
  for (let i=0; i <KeyLength; i++) {
    let rng =[Math.floor(Math.random() * multiSelect.length)];
    finalPassword = finalPassword + multiSelect[rng];
  }
  return finalPassword;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
