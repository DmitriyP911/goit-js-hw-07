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

for( let elem of ingredients ) {
    ingredientsList.insertAdjacentHTML( `afterbegin`, `<li>${elem}</li>` );
};
console.log( ingredientsList );