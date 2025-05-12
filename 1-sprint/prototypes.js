// 1 У нас есть два хомяка: шустрый (speedy) и ленивый (lazy);
//   оба наследуют от общего объекта hamster.
//   Когда мы кормим одного хомяка, второй тоже наедается. 
//   Почему? Как это исправить?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: [], // исправление
};

let lazy = {
  __proto__: hamster,
  stomach: [], // исправление
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple


// 2 Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором
//   – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

let obj2 = new obj.constructor();

//   Приведите пример функции-конструктора для объекта obj, с которой такой вызов
//   корректно сработает. 

function User(name) {
  this.name = name;
}

let user = new User('janna');
let user2 = new user.constructor('ioann');

console.log(user2.name);


// 3 Добавьте всем функциям в прототип метод defer(ms),
//   который вызывает функции через ms миллисекунд.
//   После этого должен работать такой код:

function f() {
  alert("Hello!");
}

Function.prototype.defer = function(ms) {  // добавлено
    setTimeout(this, ms)
}

f.defer(1000); // выведет "Hello!" через 1 секунду


// 4 Добавьте всем функциям в прототип метод defer(ms),
//   который возвращает обёртку, откладывающую вызов функции
//   на ms миллисекунд.

//   Например, должно работать так:

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

Function.prototype.defer = function(ms) {
    let f = this;
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    }
};

