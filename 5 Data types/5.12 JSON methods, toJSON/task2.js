// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.


let room = {
    number: 23,
    meett: 700,
    kek: {
        windoww2: 55,
        kek: 70,
    },
};

let meetup = {
    title: 'Совещание',
    occupiedBy: [{
        name: 'Иванов'
    }, {
        name: 'Петров'
    }],
    place: room,
};

let kek = {
    age: 50,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

function jsonObj(obj) {
    return JSON.stringify(obj, function replacer(key, value) {
        if ((key != '' && value == obj) || (key !== '' && value == meetup))
            return undefined;

        return value;
    });
}