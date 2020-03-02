`use strict`

const userName = document.querySelector( `#name-input` );
const welcomeString = document.querySelector( `#name-output` )

userName.addEventListener( `input`, event => {
    welcomeString.textContent = event.currentTarget.value;
} )