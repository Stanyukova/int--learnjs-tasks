// Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.

// Это предотвратит расхождение элементов при прокрутке страницы.

// Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">.


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
  