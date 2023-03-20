// Создайте кнопку, которая будет скрывать себя по нажатию.
const button = document.querySelector('#hider');
function click() {
button.hidden = true;
}
button.addEventListener('click', () => click())