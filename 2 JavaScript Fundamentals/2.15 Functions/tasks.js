//1) Ответ : функции будут работать корректно
//2)Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
function checkAge(age) {
    return (age > 18)?true:confirm('Родители разрешили?')
  }

  function checkAge(age) {
   return (age > 18)|| confirm('Родители разрешили?')
  }
//3)Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a,b) {
   return (a > b)?b:a
}

//4)Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
function pow(x,n) {
    let res = x
    if (n>1) {
        for(let i=1;i<n; i++ ) res*=x
    }
    return res
 }
