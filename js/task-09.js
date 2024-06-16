function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const showColor = document.querySelector(".color");
const btn = document.querySelector(".change-color");
// document.querySelector(".btn").addEventListener("click", function () {
//   document.body.style.backgroundColor = getRandomHexColor();
// });

btn.addEventListener("click", function onClick() {
  const body = document.querySelector("body");
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  showColor.textContent = randomColor;
});
