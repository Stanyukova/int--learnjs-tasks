// Напишите функцию createCalendar(elem, year, month).

// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

// Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:
function createCalendar(elem, year, month) {
    elem.insertAdjacentHTML("beforeend",
    `<table>
    <tr>
    <th>пн</th>
    <th>вт</th>
    <th>ср</th>
    <th>чт</th>
    <th>пт</th>
    <th>сб</th>
    <th>вс</th>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    </table>`
    );
let date = new Date(year, month-1, 1);
let day = date.getDay();
let daysInMonth = new Date(year, month, 0).getDate();
if (day === 0) {day = 7;}
let k = 1;
for (let i = 1; i < 6; i++) {
for (let j = 0; j < 7; j++) {
if (j == day - 1 && k == 1) {
let point = elem.querySelectorAll('tr')[i].querySelectorAll('td')[j];
point.append(k);
k++;
continue;
}
if (k != 1) {
let point = elem.querySelectorAll('tr')[i].querySelectorAll('td')[j];
if (k > daysInMonth) {
continue;
}
point.append(k);
k++;
}
}
}
}