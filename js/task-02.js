const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newIngredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  let li = document.createElement("li");
  li.textContent = ingredient;
  newIngredientsList.appendChild(li);
});
