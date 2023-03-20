//Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

randomInteger = (min, max) => {
    console.log(Math.random() * (max - min + 1) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    };
randomInteger(1, 5)