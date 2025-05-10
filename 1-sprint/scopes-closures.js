// 1 Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
//   Да, именно таким образом, используя двойные круглые скобки (не опечатка).
//   Например:
//   sum(1)(2) = 3
//   sum(5)(-1) = 4

function sum(a) {
  return function(b) {
    return a + b;
  };
}

console.log(sum(1)(2))

// 2 Сделайте набор «готовых к употреблению» фильтров:
//   inBetween(a, b) – между a и b (включительно).
//   inArray([...]) – находится в данном массиве.
//   Они должны использоваться таким образом:
//   arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
//   arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

function inBetween(a, b) {
    return function(res){
        return res>=a && res <= b
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));

function inArray(arr) {
    return function(el) {
        return arr.includes(el)
    }
}

console.log(arr.filter(inArray([1, 2, 10])));

// 3 починить функцию 
//   function makeArmy() {
//   let shooters = [];
//   let i = 0;
//   while (i < 10) {
    // let shooter = function() { // функция shooter
    //   alert( i ); // должна выводить порядковый номер
    // };
    // shooters.push(shooter); // и добавлять стрелка в массив
    // i++;
//   }
  // ...а в конце вернуть массив из всех стрелков
//   return shooters;
// }

// let army = makeArmy();


function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            console.log(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5