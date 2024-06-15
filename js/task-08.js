// To stop the form from being submitted, you call the preventDefault() method of the event object inside the submit event handler like this:
// form.addEventListener("submit", (event) => {
//   // stop form submission
//   event.preventDefault();
// });

// const form = document.getElementById("signup");
// form.addEventListener("submit", (event) => {
//   // handle the form data
// });

// form.addEventListener("submit", function (event) {
//   // stop form submission
//   event.preventDefault();

//   let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
//   let emailValid = validateEmail(
//     form.elements["email"],
//     EMAIL_REQUIRED,
//     EMAIL_INVALID
//   );
//   // if valid, submit the form.
//   if (nameValid && emailValid) {
//     alert("Demo only. No form was posted.");
//   }
// });
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  if (!email || !password) {
    alert("Toate câmpurile trebuie completate!");
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  loginForm.reset();
});
