`use strict`

let counterValue = 0;

const buttons = document.querySelector( `#counter` );

buttons.firstElementChild.addEventListener( `click`, increment.bind( counterValue ) );
buttons.lastElementChild.addEventListener( `click`, decrement.bind( counterValue ) );

function increment ( counterValue ) {
    return `плюсуем ${counterValue += 1}`;
}

function decrement ( counterValue ) {
    return `минусуем ${counterValue -= 1}`;
}