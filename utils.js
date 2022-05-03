export function renderIngredient(li) {
    console.log(li)
    const IngredientLi = document.createElement('li');
    IngredientLi.textContent = `Name: ${li.name}, Quantity: ${li.quantity}, Measurements: ${li.measurements}`;
    return IngredientLi;
}
