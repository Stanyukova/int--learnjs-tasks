// У нас есть объект salaries с зарплатами:


// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
function topSalary(obj) {
    let [max, name] = [0, null];
    
    for (const [key, value] of Object.entries(obj)) {
    if (value > max) [max, name] = [value, key];
    }
    
    return name;
    }
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
    console.log(topSalary(salaries))