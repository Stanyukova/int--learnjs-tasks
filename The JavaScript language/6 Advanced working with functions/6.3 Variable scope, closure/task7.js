// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
  let shooters = [];


  for (let i=0; i < 10; i++) {
    let shooter = function() { // функция shooter
        console.log( i ); // должна выводить порядковый номер
      };
    shooters.push(shooter);
    
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5


