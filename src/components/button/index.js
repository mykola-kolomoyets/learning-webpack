import './button.scss';

class Button {
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'I am a button';
        button.classList.add('button');
        button.onclick = () => {
            const paragraph = document.createElement('p');
            paragraph.innerHTML = 'I am a paragraph';
            paragraph.classList.add('paragraph');
            document.body.appendChild(paragraph);
        }

        document.body.appendChild(button);
    }
};

export default Button;