// Можем ли мы изменить this дополнительным связыванием?

// Что выведет этот код?

function f() {
  console.log(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
//Ответ: Вася