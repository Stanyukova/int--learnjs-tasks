// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];
function getAverageAge(users){
  let accum=0
  for(let i=0; i<users.length; i++) {
   accum+= +users[i].age
  }
  return accum/users.length
}
console.log(getAverageAge(arr))