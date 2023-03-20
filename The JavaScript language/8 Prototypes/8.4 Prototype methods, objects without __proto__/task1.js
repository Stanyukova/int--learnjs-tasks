// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

// Вот так это должно работать:


let dictionary = Object.create(null, {
    toString: { // определяем свойство toString
      value() { // значение -- это функция
        return Object.keys(this).join();
      }
    }
  });
  
  dictionary.apple = "Apple";
  dictionary.__proto__ = "test";
  
  // apple и __proto__ выведены в цикле
  for(let key in dictionary) {
    alert(key); // "apple", затем "__proto__"
  }
  
  // список свойств, разделённых запятой, выведен с помощью toString
  alert(dictionary); // "apple,__proto__"