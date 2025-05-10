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