import { arrayBox } from './constans';

export function successfulСlick() {
    arrayBox.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('playing-field__image')) {
                item.classList.add('playing-field__image_change_cursor');
            }
        });
    });
}
