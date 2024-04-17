import { arrayCounter, arrayBox, popup, popupHeading, popupButton } from './constans';

// --- Изменения счетчиков и открытие попапа.
export function eventListener() {
    arrayBox.forEach(item => {
        item.addEventListener('click', () => {

            if (item.classList.contains('playing-field__image')) {
                arrayCounter[0].textContent += 1;

                if (arrayCounter[0].textContent === '5') {
                    popup.classList.add('popup_opened');
                    popupHeading.textContent = 'Победа';
                }
            } else {
                arrayCounter[1].textContent += 1;

                if (arrayCounter[1].textContent === '5') {
                    popup.classList.add('popup_opened');
                    popupHeading.textContent = 'Поражение';
                }
            }
        });
    });
}

// --- Закрытие попапа, сброс счетчиков.
popupButton.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
    arrayCounter[0].textContent = 0;
    arrayCounter[1].textContent = 0;
});
