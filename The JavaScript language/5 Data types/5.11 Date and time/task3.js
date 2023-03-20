// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.


function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
      day = 7;
    }
    return day;
  }

  let date = new Date(2023, 2, 1);
console.log( getLocalDay(date) ); 

