//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fib(n) {
    if (n <= 0) {
      return 0;
    }
    if (n <= 2) {
      return 1;
    }
    let prev = 1;
    let result = 1;
    for (let i = 0; i < n - 2; i++) {
      let tmp = result;
      result += prev;
      prev = tmp;
    }
    return result;
  }
  console.log(fib(5))