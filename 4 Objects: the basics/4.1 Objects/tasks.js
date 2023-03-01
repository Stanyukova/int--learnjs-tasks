//1)Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
let user = {};
user.name='John';
user.surname='Smith';
user.name='Pete';
delete user.name

//2)Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
let schedule = {};
function isEmpty(prop) {
   for(key in prop) {
    return false
   }
   return true;
}
 isEmpty(schedule) ; // true

 //3) Ответ: можно менять содержимое объекта

 //4)Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

 let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum=0 ;
for (key in salaries) {
    sum+= +salaries[key]
}
console.log(sum)//390


//5)Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  function multiplyNumeric(menu) {
    for(key in menu) {
        if(typeof menu[key] ==='number') {
            menu[key]=menu[key]*2
        }
    }
    console.log(menu)
  }
  multiplyNumeric(menu);
