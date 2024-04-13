import { arrayBox } from './constans';

export function successfulСlick() {
    arrayBox.forEach(item => {
        item.addEventListener('click', (event) => {
            const element = event.target;

            if (element.classList.contains('playing-field__image')) {
                console.log('OK');
            }
        });
    });
}
