const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordtwo = document.getElementById("passwordtwo");

// Submit Button action

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// To check the Inputs

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordtwoValue = passwordtwo.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (passwordtwoValue === "") {
    setErrorFor(passwordtwo, "Confirm Password cannot be blank");
  } else if (passwordValue !== passwordtwoValue) {
    setErrorFor(passwordtwo, "Password does not match");
  } else {
    setSuccessFor(passwordtwo);
  }
}

// To display the Error Message

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

// For Success

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// To check wheater the entered email id is correct

function isEmail(email) {
  return /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/.test(
    email
  );
}
