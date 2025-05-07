// 1 Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
//   Временная зона – местная.
function createDate() {
    let date = new Date(2012, 1, 20, 3, 12);
    return date;
}

// 2 Напишите функцию getWeekDay(date), показывающую день
//   недели в коротком формате:
//   «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
function getWeekDay(date) {
    const week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return week[date.getDay()]
}

let date = new Date(2012, 0, 1);
// console.log(getWeekDay(date));

// 3 В Европейских странах неделя начинается с понедельника
//   (день номер 1), затем идёт вторник (номер 2) и так до
//   воскресенья (номер 7). Напишите функцию getLocalDay(date),
//   которая возвращает «европейский» день недели для даты date.
function getLocalDay(date) {
    let weekDay = date.getDay();
    if (weekDay == 0){
        weekDay = 7;
    }
    return weekDay;
}

// console.log(getLocalDay(date)); 

// 4 Создайте функцию getDateAgo(date, days), возвращающую число,
//   которое было days дней назад от даты date.
//   К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1)
//   вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
//   Функция должна надёжно работать при значении days=365 и больших значениях:

function getDateAgo(date, days){
    let ago = new Date(date);
    ago.setDate(ago.getDate() - days)
    return ago.getDate()
}
let date_4 = new Date(2015, 0, 2);

console.log( getDateAgo(date_4, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date_4, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date_4, 365) ); // 2, (2 Jan 2014)

// 5 Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
//   Иногда это 30, 31 или даже февральские 28/29.
//   Параметры:
//   year – год из четырёх цифр, например, 2012.
//   month – месяц от 0 до 11.
//   К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).



function getLastDayOfMonth(year, month){
    let date = new Date(year, month+1, 0);
    return date.getDate()
}

console.log( getLastDayOfMonth(2012, 1));
console.log('------------------------6-------------------------');

// 6 Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
//   Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
//   getSecondsToday() == 36000 // (3600 * 10)
//   Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
    let now = new Date();
    let secondsPast = now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds()
    return secondsPast
}

console.log(getSecondsToday())

// 7 Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
//   Например, если сейчас 23:00, то:
//   getSecondsToTomorrow() == 3600
//   P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
    let now = new Date();
    let secondsLeft = 3600*24 - (now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds());
    return secondsLeft
}

console.log(getSecondsToTomorrow())

// 8 Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//   Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//   В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//   В противном случае, если меньше часа, вывести "m мин. назад".
//   В противном случае, полная дата в формате "DD.MM.YY HH:mm".
//   А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
    let output = ''
    const now =  new Date();
    console.log(date)
    const msecSubtr = now.getTime() - date.getTime();
    if (msecSubtr <= (1 * 1000)) {
        output = 'прямо сейчас'
    } else if (msecSubtr <= (1 * 1000 * 60)) {
        output = `${msecSubtr/1000} сек. назад`
    } else if (msecSubtr <=  (1 * 1000 * 60 * 60)) {
        output = `${msecSubtr/1000/60} мин. назад`;
    } else {
        output = date.toLocaleString();
    }
    return output
}

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );