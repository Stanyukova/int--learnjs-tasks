// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

console.log(arr[2]()); // [ 'a', 'b', [Function (anonymous)] ], так как на третьем месте функция и после ее вызова , мы получаем объект arr