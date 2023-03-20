// Имеется <select>:

// <select id="genres">
//   <option value="rock">Рок</option>
//   <option value="blues" selected>Блюз</option>
// </select>
// Используя JavaScript:

// Выведите значение и текст выбранного пункта.
// Добавьте пункт: <option value="classic">Классика</option>.
// Сделайте его выбранным.
function showSelected (elem) {
    console.log (Array.from(elem.options).filter(item => item.selected).map(item => `Текст: ${item.text}, Значение: ${item.value}`).join(''));
    let classic = new Option ('Классика','classic',true,true);
    elem.append(classic)
    }