// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
const button = document.querySelector('#hider');
const text = document.querySelector('#text');
function click() {
text.hidden = true;
}
button.addEventListener('click', () => click())