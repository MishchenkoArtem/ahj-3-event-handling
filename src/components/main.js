import { eventListener } from "./counter";
import { successfulСlick } from "./cursor";

// --- Хаотичное отображение изображения на игровом поле
(() => {
  const playingFieldBox = document.querySelectorAll(".playing-field__box");

  const value = (array) => {
    const element = array[Math.floor(Math.random() * array.length)];
    return element;
  };

  setInterval(() => {
    const item = value(playingFieldBox);

    if (!item.classList.contains("playing-field__image")) {
      playingFieldBox.forEach((element) => {
        element.classList.remove("playing-field__image");
        element.classList.remove("playing-field__image_change_cursor");
      });

      item.classList.add("playing-field__image");
    }
  }, 1000);

  successfulСlick();
})();

eventListener();
