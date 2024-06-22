## About the project

This project involves solving a set of exercises in JavaScript.

## Lessons Learned

By completing the exercises, i've gained practical experience in front-end web development using HTML, CSS, and JavaScript. Specifically:

1. **HTML Manipulation**: Learning how to manipulate HTML elements using JavaScript, including creating, modifying, and appending elements dynamically to the DOM.

2. **Event Handling**: Practicing handling various events such as click, input, and blur events to create interactive behaviors in response to user actions.

3. **DOM Manipulation**: Exploring methods to interact with the Document Object Model (DOM), including selecting elements, modifying their attributes, and updating their content based on user input or predefined data.

4. **Styling with CSS**: Integrating CSS styles dynamically based on user actions, improving the visual appearance and interactivity of web pages.

5. **Form Handling**: Implementing form validation, submission handling, and data collection using JavaScript, ensuring user inputs are validated and processed correctly.

6. **Functional Programming**: Appling JavaScript functions to perform repetitive tasks efficiently, such as creating and deleting multiple DOM elements based on user input.

These exercises provided a foundational understanding of front-end web development concepts and equipped me with practical skills to build interactive and responsive web applications.

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Related

Here are some related projects: [Gallery project](https://github.com/Miro-wq/goit-js-hw-07)

## 🛠 Tools [![My Skills](https://skillicons.dev/icons?i=js,html,css,wasm)](https://skillicons.dev)

The key features and tasks implemented in this project are as follows:

## Exercise 1
The HTML code contains a list of categories in ul#categories.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Write a script that:

Counts and displays in the console the total number of categories in ul#categories, i.e., the li.item elements.
For each li.item element in the ul#categories list, finds and displays in the console the title of the element (the ```<h2>``` tag) and the number of items in that category (all ```<li>``` elements).
As a result, the console should display messages like:

```
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

## Exercise 2
The HTML code contains an empty list ul#ingredients.

```
<ul id="ingredients"></ul>
```

In the JavaScript file, there is an array with the following strings:

```
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
```

Write a script that for each element of the ingredients array:

Creates a separate ```<li>``` element. Make sure to use ```document.createElement()```
Adds the ingredient name as text content.
Adds the class item to the element.
Then inserts all ```<li>``` elements in one operation into the list ul#ingredients.

## Exercise 3
Write a script that creates an image gallery based on an array of data. The HTML has a list ul.gallery.

```
<ul class="gallery"></ul>
```

Use the array of objects images to create ```<img>``` elements nested in ```<li>```. Template strings and the ```insertAdjacentHTML()``` method will be helpful.

All gallery items should be added to the DOM in one operation.

Add minimal styling for gallery positioning (flexbox or grid) using CSS classes.

```
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
```

## Exercise 4
The counter consists of a span tag and two buttons that, when pressed, should increase or decrease the value by one.

```
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```

Declare a variable counterValue that will store the current value of the counter and assign it an initial value of 0.

Add click handlers on the buttons, inside which you will increase or decrease the counterValue.

Update the interface with the new value of the counterValue.

## Exercise 5
Write a script that, when text is entered into input#name-input (input event), replaces the value of span#name-output with the current value from input#name-input. If the input is empty, the span should display "Anonymous".

```
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

## Exercise 6
Write a script that, when focus is lost from an input (blur event), checks if the number of entered characters is correct.

```
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
```

The allowed number of characters should be specified in the data-length attribute.

If the correct number of characters is entered, the border should turn green; otherwise, it should turn red.

To apply the necessary styles, use the CSS classes valid and invalid already added to the source files of this exercise.

```
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
```

## Exercise 7

Write a script that responds to changes in the value of input#font-size-control (input event) and modifies the inline styles of span#text by updating the font-size property. As a result, when you slide the scrollbar, the text size will change.

```
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```

## Exercise 8

Write a login form control script.

```
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
```

Handle form submission for form.login-form within the submit event. When submitting the form, the page should not reload.

If the form has empty fields, display an alert warning that all fields must be completed.

If the user has filled in all fields and submitted the form, collect the field values into an object where the field name will be the property name and the field value will be the property value. Access form elements using the elements property.

Display the object with the entered data in the console and clear the values of the form fields using the reset method.

## Exercise 9

Write a script that changes the background color of the ```<body>``` element through inline styles when button.change-color is clicked, and displays the color value in ```span.color```

```
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

To generate a random color, use ```getRandomHexColor```

```
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
```

## Exercise 10 (optional)

Write a script to create and delete a collection of elements. The user enters the number of elements into the input and clicks the Create button, after which the collection is displayed on the page. When clicking the Destroy button, the collection of elements will be deleted.

```
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

Create a function ```createBoxes(amount)``` that takes a number as a parameter. The function will create as many ```<div>``` elements as specified in amount and add them to the div#boxes.

The dimensions of the first ```<div>``` will be 30px by 30px.

Each subsequent element, except the first, should be 10px wider and taller than the previous one.

All elements should have a random background color in HEX format. Use the existing ```getRandomHexColor``` function to get a color.

Write a function ```destroyBoxes()``` that will clear the content of div#boxes, thus deleting all created elements.
