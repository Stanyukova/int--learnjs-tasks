//Создайте цветные часы как в примере ниже:

let ss = new Date().getSeconds();
let mm = new Date().getMinutes();
let hh = new Date().getHours();

let start = document.createElement('button');
start.textContent = 'start';
let stop = document.createElement('button');
stop.textContent = 'stop';

let result = document.createElement('div');
result.classList.add('timer');

let tiktak = document.createElement('div');

tiktak.append(result);
tiktak.append(document.createElement('br'));
tiktak.append(start);
tiktak.append(stop);

document.body.append(tiktak);

document.querySelector('.timer').innerHTML = `${hh}:${mm}:${ss}`;

let timerId;

stop.addEventListener('click',()=>{
clearInterval(timerId);
});
start.addEventListener('click',()=>{
timerId = setInterval(()=>{
document.querySelector('.timer').children[0].textContent = new Date().getHours();
document.querySelector('.timer').children[1].textContent = new Date().getMinutes();
document.querySelector('.timer').children[2].textContent = new Date().getSeconds();

},1000);
});