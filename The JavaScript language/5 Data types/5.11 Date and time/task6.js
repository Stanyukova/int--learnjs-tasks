//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.


function getSecondsToday() {
    let timeStampNow = Date.now();
    let now = new Date(timeStampNow);
    let timeStampMidnight = now.setHours(00, 00, 00);
    return (timeStampNow - timeStampMidnight) / 1000
}

alert(getSecondsToday());