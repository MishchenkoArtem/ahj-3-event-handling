import { arrayCounter, arrayBox, popup, popupHeading, popupButton } from './constans';

const testCounter = (element) => {
    const nums = element.textContent += 1;
    
    const sum = nums.split('').
        reduce(function (currentSum, currentNumber) {
            return Number(currentSum) + Number(currentNumber)
        }, 0)

        return element.textContent = sum;
}

// --- Изменения счетчиков и открытие попапа.
export function eventListener() {
    arrayBox.forEach(item => {
        item.addEventListener('click', () => {

            if (item.classList.contains('playing-field__image')) {
                testCounter(arrayCounter[0]);

                if (arrayCounter[0].textContent === '5') {
                    popup.classList.add('popup_opened');
                    popupHeading.textContent = 'Победа';
                }
            } else {
                testCounter(arrayCounter[1]);

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
