//const usernameRegex = /^[a-zA-Z0-9]+$/;
//const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//function addlisteners() {
//document.getElementById("username").addEventListener("input", validateUserName);
//var username = this.value.trim();

const registrationForm = document.getElementById("registration");

const username = document.getElementById("username");
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordCheck = document.getElementById("passwordCheck")
// const terms = registrationForm.elements["terms"];
const errorDisplay = document.getElementById("errorDisplay");
const successDisplay = document.getElementById("successDisplay");

registrationForm.addEventListener("submit", validateRegistration);

function validateRegistration(event){
  event.preventDefault();
  
  const usernameVal = validateUserName()
if (usernameVal === false){
  event.returnValue = false;
  return false;
}

const emailVal = validateEmail()
  if (emailVal === false){
    event.returnValue= false;
    return false
  }

  const passwordVal = validatePassword()
  if (passwordVal === false){
    event.returnValue= false;
    return false
  }

  // const passwordCheckVal = validatePasswordCheck()
  // if (passwordCheckVal === false){
  //   event.returnValue= false;
  //   return false
  // }
  displaySucess("Registered Successfully");
  username.value="";
  email.value="";
  password.value="";
  passwordCheck.value="";

}



function validateUserName() {
  // console.log(username.value);
  let pattern = "^[a-zA-Z]{4,}";

  if (username.value === "") {
    displayError("Please enter a username");
    console.log("username");
    username.focus();
    return false;
  }
 else if (!username.value.match(pattern)){
    displayError("Please enter username starting with a-z withing length of 4");
    username.focus();
    return false;
  } 
  // else if (username.value.length < 4){
  //   displayError("Username should not be less than 4 letters");
  //   username.focus();
  //   return false;
  // }
  return username.value;
 
}

function validateEmail(){
  let pattern = "^(?!.*@example\.com$)[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$";
  if (email.value === "") {
    displayError("Please add your email");
    console.log("username");
    email.focus();
    return false;
  }
 else if (!email.value.match(pattern)){
    displayError("Please enter a valid email address");
    email.focus();
    return false;
}
return email.value;
}

function validatePassword(){
  let pattern = "^(?!.*password)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+={}[\]:;\"'<>,.?/\\|-]).{12,}$";
  if (password.value === "") {
    displayError("Please enter your password");
    password.focus();
    return false;
  }
 else if (password.value.match(pattern)){
    displayError("Please enter a valid password of 12 characters long with at least one number, and one lowercase and one uppercase letter");
    password.focus();
    return false;
} else if (password.value !== passwordCheck.value){
  displayError("Please re-enter your password");
    passwordCheck.focus();
    return false;
}
  return password.value;
}

// function validatePasswordCheck(){
//   let pattern = "^(?!.*password)$";
//   if (passwordCheck.value === "") {
//     displayError("Please re-enter your password");
//     console.log("username");
//     passwordCheck.focus();
//     return false;
//   }
//  else if (!passwordCheck.value.match(pattern)){
//     displayError("Please enter a valid password ");
//     passwordCheck.focus();
//     return false;
// } 
// else if( password.value !== passwordCheck.value) {
//   displayError("Your passwords do not match");
//   passwordCheck.focus();
//     return false;
// }

//   return password.value;
// }



function displayError(message) {
  errorDisplay.innerText = message;
  errorDisplay.style.display = "block";
  setTimeout(() => {
    errorDisplay.innerText = "";
    errorDisplay.style.display = "";
  }, 2000);
}


function displaySucess(message) {
  successDisplay.innerText = message;
  successDisplay.style.display = "block";
  setTimeout(() => {
    successDisplay.innerText = "";
    successDisplay.style.display = "";
  }, 2000);
}


