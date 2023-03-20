// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

function sumSalaries(salaries) {
    let sumSsalaries = 0;
    for (const iterator of Object.values(salaries)) {
    sumSsalaries += iterator;
    }
    return sumSsalaries;
    }
  

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log(sumSalaries(salaries));

