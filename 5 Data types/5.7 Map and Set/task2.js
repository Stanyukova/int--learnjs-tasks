// Отфильтруйте анаграммы

// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

function aclean(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
    return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );