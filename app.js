// import functions and grab DOM elements
import { renderIngredient, renderMeal } from './utils.js';
const form = document.getElementById('add-ingredient');
const removeButton = document.getElementById('remove-button');
const ingredientsList = document.getElementById('ingredients-list');
const saveButton = document.getElementById('save-button');
const mealInput = document.getElementById('saveMeal');
const mealsList = document.getElementById('meals-list');

// let state
let ingredients = [];
let meals = [];


function renderIngredients() {
    ingredientsList.textContent = '';
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        ingredientsList.append(li);
    }
}

// set event listeners

function renderMeals() {
    mealsList.textContent = '';
    for (let meal of meals) {
        const li = renderMeal(meal);
        mealsList.append(li);
    }
}

saveButton.addEventListener('click', () => {
    let mealObject = mealInput.value;
    let totalIngredients = ingredientsList.length;

    meals.push({
        mealObject,
        totalIngredients,
    });
    resetIngredients();
    renderMeals();
});

removeButton.addEventListener('click', () => {
    ingredients.pop();
    renderIngredients();
});

function resetIngredients() {
    ingredients = [];
    ingredientsList.textContent = '';
}

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