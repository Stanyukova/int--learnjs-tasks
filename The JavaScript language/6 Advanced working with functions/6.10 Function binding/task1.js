// Что выведет функция?

function f() {
  console.log( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();
//Ответ:null