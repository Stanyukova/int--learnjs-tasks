//Напишите функцию printList(list), которая выводит элементы списка по одному.
//Сделайте два варианта решения: используя цикл и через рекурсию.


//1 решение
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list) {
let newList = list
    while(newList) {
      console.log(newList.value);
      newList = newList.next;
    }
  }
  printList(list)

  //2 решение через рекурсию
  function printList(list) {

    console.log(list.value); 
    if (list.next) {
      printList(list.next);
    }
  }
  printList(list);