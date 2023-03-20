// Для страницы:

// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…

// элемент <div>?
document.body.childNodes[1]
// <ul>?
document.body.lastElementChild
// второй <li> (с именем Пит)?
document.body.lastElementChild.lastElementChild


