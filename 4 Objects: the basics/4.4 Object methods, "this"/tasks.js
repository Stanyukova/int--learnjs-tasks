//1)Каким будет результат при обращении к свойству объекта ref? Почему?

// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }

//   let user = makeUser();

//   alert( user.ref.name ); // Каким будет результат?

//Ответ:ошибка, потому что this вызывается как функция, а не как метод

//2)Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read() {
    this.a = +prompt("введите число a", 0);
    this.b = +prompt("введите число b", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//3)Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
