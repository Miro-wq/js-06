const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll("li.item");
const numberOfCategories = categories.length;
console.log("Number of categories:", numberOfCategories);
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("ul li");
  console.log(`Category: ${title}`);
  console.log(`Elements: ${items.length}`);
});
