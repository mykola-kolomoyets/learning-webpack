import Cat from './assets/cat.jpeg';

const addImage = () => {
    const img = document.createElement('img');
    img.alt = 'Cat';
    img.width = 300;
    img.src = Cat;

    const body = document.body;

    body.appendChild(img);
};

export { addImage };
