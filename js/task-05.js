const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// inputElement.addEventListener("input", () => {
//   outputElement.textContent =
//     inputElement.ariaValueMax.trim() !== "" ? inputElement.value : "Anonymous";
// });
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
