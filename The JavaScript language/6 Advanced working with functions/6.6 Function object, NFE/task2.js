// Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

function sum(a) {
    sum.count +=a
    return sum;
}
sum.count = 0;
sum.toString = function(){
    let count = sum.count;
    sum.count = 0; 
    return count;
}
    console.log(sum(1)(2)(3))