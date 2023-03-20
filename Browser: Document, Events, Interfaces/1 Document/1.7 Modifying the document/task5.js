// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },

    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };

  function createTree(container, data) {
    let ul = document.createElement("ul");
    for (const key in data) {
    ul.insertAdjacentHTML("beforeend", `<li>${key}</li>`);
    if (JSON.stringify(data[key]) !== '{}') {
    createTree(ul.lastChild, data[key]);
    }
    }
    container.append(ul);
    }

 