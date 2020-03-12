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

ingredients.map( elem => {
    const li = document.createElement( `li` );
    const liArr = [];
    li.textContent = elem;
    liArr.push( li );
    ingredientsList.append( ...liArr );
} );

console.log( ingredientsList );