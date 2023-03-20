// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//1 вариант, решение с помощью цикла
function sumTo(n) {
    let res=0;
    for (let i=1; i<=n; i++) {
        res+=i
    }
    return res
}
console.log(sumTo(3))
//2 вариант, решение с помомщью рекурсии
function sumTo2(x) {
   return (x == 1) ? x : (x+ sumTo2(x- 1));
}
console.log(sumTo2(100))
//3 вариант, решение с помощью формулы

function sumTo(n) {
    return n * (n + 1) / 2;
  }
  
 console.log( sumTo(100) )