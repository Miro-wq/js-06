const validationInput = document.querySelector("#validation-input");
const requiredLength = Number.parseInt(validationInput.dataset.length);

validationInput.addEventListener("blur", () => {
  const trimValue = validationInput.value.trim();
  if (trimValue.length === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
