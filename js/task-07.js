const inputFont = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

inputFont.addEventListener("input", () => {
  spanText.style.fontSize = `${inputFont.value * 4}%`;
});

// inputFont.addEventListener("mouseup", function () {
//   if (this.value > 0 && this.value < 90) {
//     spanText.style.fontSize = `${inputFont.value + 4}%`;
//   } else {
//     spanText.style.fontSize = `${inputFont.value - 4}%`;
//   }
// });
