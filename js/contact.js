const form = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

//name

function validateForm(event) {
  event.preventDefault();

  if (firstName.value.trim().length > 0) {
     firstNameError.style.display = "none";
  } 
  else {
     firstNameError.style.display = "block";
  }

  //subject

  if (subject.value.trim().length > 10) {
    subjectError.style.display = "none";
  }
  else {
    subjectError.style.display = "block";
  }

  //address

  if (address.value.trim().length > 25) {
    addressError.style.display = "none";
  }
  else {
    addressError.style.display = "block";
  }

//email

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
} else {
    emailError.style.display = "block";
}

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

//email

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

