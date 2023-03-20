// Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

// Пользователь должен ввести что-то в текстовое поле и нажать Enter или кнопку «OK», после чего должна вызываться функция callback(value) со значением поля.
// Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
// В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

// Требования:

// Форма должна быть в центре окна.
// Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно, пока пользователь не закроет его.
// При показе формы, фокус должен находиться сразу внутри <input>.
// Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы.
function showPrompt(text, func) {
    const formDiv = document.getElementById("prompt-form-container");
    const formText = document.getElementById("prompt-message");
    const form = document.forms[0];
    const formPrompt = form.text;
    const formCancel = form.cancel;
    const formSubmit = form.submitButton;

    formText.innerText = text;

    formDiv.addEventListener('keydown', stopTab)

    function stopTab(event) {
        if (event.repeat) {
            event.preventDefault();
        }
        if (event.shiftKey && event.key === "Tab") {
            event.preventDefault();
        }
    }

    button.addEventListener("click", showContainer);

    function showContainer() {
        formDiv.style.display = 'block';
        formPrompt.focus();
    };

    formCancel.addEventListener("click", pressCancel);

    function pressCancel() {
        formDiv.style.display = 'none';
    };

    formSubmit.addEventListener("click", pressOk);

    function pressOk(event) {
        if (formPrompt.value === "") {
            event.preventDefault();
            return
        }
        func(formPrompt.value);
    };

    formSubmit.addEventListener("submit", pressOk);

    function pressOk(event) {
        if (formPrompt.value === "") {
            event.preventDefault();
            return
        }
        func(formPrompt.value);
    };
}
showPrompt("ы", (msg) => alert(`${msg}`));