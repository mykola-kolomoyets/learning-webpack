import './button.scss';

class Button {
    buttonClass = 'button';
    paragraphClass = 'paragraph';
    
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'I am a button';
        button.classList.add(this.buttonClass);
        button.onclick = () => {
            const paragraph = document.createElement('p');
            paragraph.innerHTML = 'I am a paragraph';
            paragraph.classList.add(this.paragraphClass);
            document.body.appendChild(paragraph);
        }

        document.body.appendChild(button);
    }
};

export default Button;