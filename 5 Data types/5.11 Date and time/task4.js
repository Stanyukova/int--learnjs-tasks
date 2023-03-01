// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

function getDateAgo(date, days) {
    let startDate = date.getTime();
    let daysAgo = days * 24 * 3600 * 1000;
    return new Date(startDate - daysAgo).getDate();
    }

