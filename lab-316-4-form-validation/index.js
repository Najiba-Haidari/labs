//for registration form
const registrationForm = document.getElementById("registration");

const username = document.getElementById("username");
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordCheck = document.getElementById("passwordCheck")
const terms = document.getElementById("terms")
const errorDisplay = document.getElementById("errorDisplay");
const successDisplay = document.getElementById("successDisplay");
let users = [];

//for login form
const loginForm= document.getElementById("login");
const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");
const loginCheckbox = document.getElementById("loginCheckbox");

registrationForm.addEventListener("submit", validateRegistration);
loginForm.addEventListener("submit", validateLogin);

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

  const passwordCheckVal = validatePasswordCheck()
  if (passwordCheckVal === false){
    event.returnValue= false;
    return false
  }
  
  const termsChecked = validateTerms();
  if (termsChecked === false){
    event.returnValue=false;
    return false;
  }

  //localstorage for array of users
  const newUser = {
    username: username.value.trim().toLowerCase(),
    email: email.value.trim().toLowerCase(),
    password: password.value
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  console.log("new user", newUser)
  users.push(newUser);
  console.log("users", users);

  localStorage.setItem("users", JSON.stringify(users));
  // console.log(localStorage.setItem("users", JSON.stringify(users)))



  displaySuccess("Registered Successfully");
  resetRegForm();

}
console.log(users)
// reset the inputs in registration form
function resetRegForm(){
  username.value="";
  email.value="";
  password.value="";
  passwordCheck.value="";
  terms.checked = false;
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
    // console.log("username");
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
  let pattern = /^(?!.*password)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+={}[\]:;"'<>,.?/\\|-]).{12,}$/;
  if (password.value === "") {
    displayError("Please enter your password");
    password.focus();
    return false;
  }
 else if (!password.value.match(pattern)){
    displayError("Please enter a valid password of 12 characters long with at least one number, and one lowercase and one uppercase letter");
    password.focus();
    return false;
}
  return password.value;
}

function validatePasswordCheck(){
  if (passwordCheck.value === "") {
    displayError("Please enter your password");
    passwordCheck.focus();
    return false;
  }
  if (password.value !== passwordCheck.value){
    displayError("Please re-enter your password");
      passwordCheck.focus();
      return false;
  }
  return password.value;
}

function validateTerms(){
  if (!terms.checked == true){
    // console.log(terms.value)
    displayError("Please check the terms!");
    terms.focus();
    return false;
  }
  return terms;
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

function validateLogin(event){
  event.preventDefault();
  const loginUsers = JSON.parse(localStorage.getItem("users")) || [];
  console.log(loginUsers)
    // Get the entered username 
    const enteredUsername = loginUsername.value.trim().toLowerCase();
  
    // Find the user with the matching username
    const foundUser = loginUsers.find(user => user.username === enteredUsername);
  if (!foundUser){
    console.log(!foundUser)

    displayError("User Not Found");
    loginUsername.focus();
    return false;
    // loginUsername.value=""
  }

  const foundPassword = loginUsers.find((user)=> user.password === loginPassword.value);
  if (!foundPassword){
    displayError("Password is not correct");
    loginPassword.focus();
    return false;
  }

  const loginCheckboxChecked = validateCheckboxLogin();
  if (loginCheckboxChecked === false){
    event.returnValue=false;
    return false;
  }

  displaySuccess("Logging in Successfully");
  resetLoginForm();
}


function validateCheckboxLogin(){
  if (!loginCheckbox.checked == true){
    // console.log(terms.value)
    displayError("Please check to keep you logged in!");
    loginCheckbox.focus();
    return false;
  }
  return loginCheckbox;
}

function resetLoginForm(){
  loginUsername.value="";
  loginPassword.value="";
  loginCheckbox.checked=false;
}


function displayError(message) {
  errorDisplay.innerText = message;
  errorDisplay.style.display = "block";
  setTimeout(() => {
    errorDisplay.innerText = "";
    errorDisplay.style.display = "";
  }, 2000);
}


function displaySuccess(message) {
  successDisplay.innerText = message;
  successDisplay.style.display = "block";
  setTimeout(() => {
    successDisplay.innerText = "";
    successDisplay.style.display = "";
  }, 2000);
}


