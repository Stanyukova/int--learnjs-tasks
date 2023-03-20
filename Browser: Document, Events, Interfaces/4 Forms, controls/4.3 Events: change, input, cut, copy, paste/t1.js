// Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, а затем рассчитать, какая это будет сумма через заданный промежуток времени.

let form = document.forms.calculator;


function calcResult() {
if (form.money.value) {
let initial = form.money.value;
let interest = form.interest.value / 100;
let years = form.months.value / 12
let result = Math.round(initial * (1 + interest) ** years);
let moneyBefore = document.querySelector("#money-before")
moneyBefore.innerHTML = initial;
let moneyAfter = document.querySelector("#money-after")
moneyAfter.innerHTML = result;
let heightAfter = document.querySelector("#height-after")
heightAfter.style.height = 100 * (result / initial) + "px";
}
}


calcResult();
form.money.oninput = calcResult
form.interest.oninput = calcResult
form.months.onchange = calcResult