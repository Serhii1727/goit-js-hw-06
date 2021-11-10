const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");



const addList = ingredients =>
    ingredients.map(item => {
        const itemEl = document.createElement("li");
        itemEl.classList.add("item");
        itemEl.textContent = item;
        return itemEl;
    });


const newIngredients = addList(ingredients);

ingredientsListEl.append(...newIngredients);