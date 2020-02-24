`use strict`

const gallery = document.querySelector( `#gallery` );

gallery.setAttribute( `style`, `list-style: none; display: flex; justify-content: space-between;` )

const images = [
    {
        src:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        src:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        src:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

function createImg ( array ) {
    for( let obj of array ) {
        gallery.insertAdjacentHTML( `beforeend`, `<li><img></img></li>` );
        for( let key in obj ) {
            gallery.lastElementChild.lastElementChild.setAttribute( `${key}`, `${obj[key]}` );
            gallery.lastElementChild.lastElementChild.setAttribute( `class`, `imgStyle` );
        }
    }
}

createImg( images );