// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.
const printNumbers = (from, to) => {
    const interval = setInterval(() => {
        console.log(from++);
        from === to && clearInterval(interval)
    }, 1000)
}

const printNumbers2 = (from, to) => {
    setTimeout(function timer() {
        console.log(from++);
        from < to && setTimeout(timer, 1000)
    }, 1000)
}