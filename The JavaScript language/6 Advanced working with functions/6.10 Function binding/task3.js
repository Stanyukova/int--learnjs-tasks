// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log( bound.test ); // что выведет? почему?
//Ответ: undefined.

// Результатом работы bind является другой объект. У него уже нет свойства test.