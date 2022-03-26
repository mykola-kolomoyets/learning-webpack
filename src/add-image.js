import Cat from './assets/cat.jpeg';

import alt from './cat-alt-text.txt';

const addImage = () => {
    const img = document.createElement('img');
    img.alt = alt;
    img.width = 300;
    img.src = Cat;

    const body = document.body;

    body.appendChild(img);
};

export { addImage };
