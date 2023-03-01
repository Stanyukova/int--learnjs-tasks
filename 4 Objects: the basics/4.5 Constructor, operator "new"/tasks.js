//1)Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
//Ответ: да
let user = {
    name: 'John'
};

function A() {
    return user;
}

function B() {
    return user;
}

let a = new A();
let b = new B();

console.log(a == b); // true

//2)Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
    this.read = function () {
            this.a = +prompt("введите число a", 0);
            this.b = +prompt("введите число b", 0);
        },
        this.sum = function () {
            return this.a + this.b;
        },
        this.mul = function () {
            return this.a * this.b;
        }
};

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());


//3)Создайте функцию-конструктор Accumulator(startingValue).
function Accumulator(prop) {
    this.value = prop;
    this.read = function () {
        this.value += +prompt("введите число", 0);
    }

};
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value);