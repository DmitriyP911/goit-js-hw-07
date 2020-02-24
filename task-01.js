`use strict`

const catogoriesValue = document.querySelector( `#categories` ).children.length;

console.log( `В списке ${catogoriesValue} категории` );
// console.log( `В списке ${catogoriesValue} категории` ); 

const categoryArray = document.querySelectorAll( `.item` );

for( let elem of categoryArray ) {
    console.log( `Категория: `, elem.firstElementChild );
    console.log( `Количество элемментов: `, elem.lastElementChild.children.length )
};