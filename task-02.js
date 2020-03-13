`use strict`

let ingredientsList = document.querySelector( `#ingredients` );

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const liArr = ingredients.map( elem => {
    const li = document.createElement( `li` );
    li.textContent = elem;
    return li;
} );

ingredientsList.append( ...liArr );