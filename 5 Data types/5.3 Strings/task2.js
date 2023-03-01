// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:



function checkSpam(str) {
    str =str.toLowerCase()
   return str.includes('viagra') || str.includes('xxx');
}
console.log(checkSpam('buy ViAgRA now'))
checkSpam('free xxxxx')
checkSpam("innocent rabbit") 