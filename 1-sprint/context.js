// 1 Cоздайте объект calculator (калькулятор) с тремя методами:
//   read() (читать) запрашивает два значения и сохраняет их как
//   свойства объекта с именами a и b.
//   sum() (суммировать) возвращает сумму сохранённых значений.
//   mul() (умножить) перемножает сохранённые значения и возвращает
//   результат.

let calculator = {
    read() {
        this.a = +prompt('первое число', 0)
        this.b = +prompt('второе число', 0)
    },

    sum() {
        return this.a + this.b
    },

    mul() {
        return this.a * this.b
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// 2 У нас есть объект ladder (лестница),
//   который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep() {
    alert( this.step );
    return this
  }
};

//  Теперь, если нам нужно выполнить несколько
//  последовательных вызовов, мы можем сделать это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

//  Измените код методов up, down и showStep таким образом,
//  чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); 

// 3 Исправьте выделенную строку, чтобы всё работало
//   (других строк изменять не надо).

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

// askPassword(user.loginOk, user.loginFail); ИЗМЕНИТЬ

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


// 4 Объект user был изменён. Теперь вместо двух функций
//   loginOk/loginFail у него есть только одна – user.login(true/false).

//   Что нужно передать в вызов функции askPassword в коде ниже,
//   чтобы она могла вызывать функцию user.login(true) как ok и функцию
//   user.login(false) как fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user1 = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

// askPassword(?, ?); ???
// Ваши изменения должны затрагивать только выделенный фрагмент кода.

askPassword(user.login.bind(user1, true), user.login.bind(user1, false));


// 5 создадим функцию без контекста this, но ссылающуюся на него. 
//   исправить код

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary() {
  console.log(`${this.title} was written by ${this.author}.`)
}

// summary()

summary.call(book) // или
summary.apply(book)