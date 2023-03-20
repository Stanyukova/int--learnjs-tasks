// Создайте <div>, который превращается в <textarea>, если на него кликнуть.

// <textarea> позволяет редактировать HTML в элементе <div>.

// Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.
let viewEl = document.getElementById('view');
viewEl.tabIndex = 0;                                  /* возможность получения собьітия focus */

let textareaEl = document.createElement('textarea');
textareaEl.classList.add("edit");

viewEl.addEventListener('focus', function(event) { /* при фокусировке замена на textarea */
  textareaEl.value = viewEl.innerHTML;
  viewEl.replaceWith(textareaEl);
  textareaEl.focus();
});

textareaEl.addEventListener('blur', function(event) { /* при уходе фокуса замена на view */
  viewEl.innerHTML = textareaEl.value;
  textareaEl.replaceWith(viewEl);
});

textareaEl.onkeydown = function(event) {                /* добавим собьітие для 'Enter' */
  if (event.key == 'Enter') {
    this.blur();
  }
};