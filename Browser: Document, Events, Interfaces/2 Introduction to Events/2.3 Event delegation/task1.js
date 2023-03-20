// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.

container.addEventListener('click', (event) => {
    let div = event.target.closest('div');
    let button = event.target;
    if(!button.classList.contains('remove-button')) {
      return;
    }
    div.remove();
  });