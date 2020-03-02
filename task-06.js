`use strict`

const inputField = document.querySelector( `#validation-input` );
const maxInputValue = inputField.getAttribute( `data-length` );

inputField.addEventListener( `input`, event => {
    if( 0 < event.currentTarget.value.length <= maxInputValue ) {
        document.getElementById( `validation-input` ).classList.remove( `invalid` );
        document.getElementById( `validation-input` ).classList.add( `valid` );
    } else {
        document.getElementById( `validation-input` ).classList.remove( `valid` );
        document.getElementById( `validation-input` ).classList.add( `invalid` );
    }
} )