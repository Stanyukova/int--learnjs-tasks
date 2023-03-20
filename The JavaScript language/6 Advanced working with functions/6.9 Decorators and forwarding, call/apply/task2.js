// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  console.log(x);
}

function delay(func, ms) {
  
  return function() {
    setTimeout(() => {
      return func.apply(this, arguments);
    }, ms);
  }
  
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");