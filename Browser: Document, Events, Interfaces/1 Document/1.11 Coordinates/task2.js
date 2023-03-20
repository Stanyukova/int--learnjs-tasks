// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.

// Аргумент position – строка с одним из 3 значений:

// "top" – расположить elem прямо над anchor
// "right" – расположить elem непосредственно справа от anchor
// "bottom" – расположить elem прямо под anchor
// Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.


function positionAt(anchor, position, elem) {
let coords = anchor.getBoundingClientRect();

if (position == "top") {
elem.style.left = coords.left + 'px';
elem.style.top = (coords.top - elem.offsetHeight) + 'px';
} else if (position == "right") {
elem.style.left = coords.right + 'px';
elem.style.top = coords.top + 'px';
} else if (position == "bottom") {
elem.style.left = coords.left + 'px';
elem.style.top = coords.bottom + 'px';
}
}

function showNote(anchor, position, html) {
let note = document.createElement('div');
note.className = "note";
note.innerHTML = html;
document.body.append(note);

positionAt(anchor, position, note);
}

let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
 