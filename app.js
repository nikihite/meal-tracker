// import functions and grab DOM elements
import { renderIngredient } from './utils.js';
const form = document.getElementById('add-ingredient');
const removeButton = document.getElementById('remove-button');
const ingredientsList = document.getElementById('ingredients-list');

// let state
let ingredients = [];


function renderIngredients() {
    ingredientsList.textContent = '';
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        ingredientsList.append(li);
    }
}

// set event listeners
removeButton.addEventListener('click', () => {
    ingredients.pop();
    renderIngredients();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const ingredientsData = new FormData(form);

    let addIngredients = {
        name: ingredientsData.get('name'),
        quantity: ingredientsData.get('quantity'),
        measurements: ingredientsData.get('measurements'),
    };
    ingredients.push(addIngredients);
    renderIngredients();
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state