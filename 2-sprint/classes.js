// 1 Класс Clock написан в функциональном стиле. Перепишите его,
//   используя современный синтаксис классов. (все было написано через функции)
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  
  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
// clock.start(); // каждую секунду выводит текущее время

// 2 Система пользователей и администраторов. Реализовать 2 класса:
//   User и Admin
// Использовать extends для наследования Admin от User.
// Использовать super() в конструкторе Admin для вызова конструктора User.
// Использовать super.sayHi() внутри sayHi() админа.

class User {
  constructor(name, email){
    this.name = name;
    this.email = email;
  }

  sayHi(){
    console.log(`привет, меня зовут ${this.name}`)
  }

  getEmail() {
    return this.email;
  }
}

class Admin extends User {
  constructor(name, email, role) {
    // this.name = name;  
    // this.email = email;
    super(name, email);
    this.role = role;
  }

  sayHi(){
    super.sayHi();
    console.log(`у меня роль ${this.role}`)
  }

  isAdmin() {
    return true;
  }
}

let user = new User("Иван", "ivan@example.com");
user.sayHi(); // привет, меня зовут Иван

let admin = new Admin("Мария", "maria@example.com", "editor");
admin.sayHi(); // привет, меня зовут Мария 
              // у меня роль editor

console.log(admin.getEmail()); //maria@example.com

// 3 Создай класс Article с:
//   свойством title (в конструкторе),
//   статическим свойством count — число всех созданных статей,
//   статическим методом getCount(), который возвращает это число.

class Article{
  static count = 0;
  constructor(title){
    this.title = title;
    Article.count++; // каждый раз при вызове конструктора (при создании объекта)
  }

  static getCount() {
    return Article.count
  }
}

let a1 = new Article("1");
let a2 = new Article("2");
let a3 = new Article("3");

console.log(Article.getCount()); // 3
console.log(a1.title); // 1
console.log(a1.getCount); // undefined

// 4 Создай класс Rectangle с:
//   Конструктором, принимающим width и height
//   Геттером area, который возвращает площадь прямоугольника
//   Сеттером area, который принимает новое значение площади
//   и автоматически пересчитывает height, оставляя width прежним
//   Геттером description, который возвращает строку вида
//   "Прямоугольник шириной X и высотой Y"

class Rectangle {
  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    if (value < 0) {
      console.log('площадь не может быть отрицательной')
    } else {
      this.height = value / this.width;
    }
  }

  get description() {
    return `Прямоугольник шириной ${this.width} и высотой ${this.height}`
  }

}

let rect = new Rectangle(5, 10);
console.log(rect.area);   // 50
rect.area = 100;          // width остаётся 5 → height станет 20
console.log(rect.height); // 20
console.log(rect.description); // "Прямоугольник шириной 5 и высотой 20"

// 5 Реализуй классы для описания товаров в интернет-магазине:
// Класс Product
// Содержит:
// Конструктор, принимающий name, price, quantity
// Геттер totalPrice — возвращает price * quantity
// Сеттер quantity, который не позволяет устанавливать отрицательные значения
// Метод describe() — выводит строку: "Товар: Название, Цена: X, Кол-во: Y"
// static метод isProduct(obj) — возвращает true, если obj — это экземпляр класса Product
// Класс DigitalProduct (наследует Product)
// Особенности:
// Не имеет quantity, всегда считается как 1
// При вызове describe() добавляет текст " (Цифровой товар)"
// Геттер totalPrice работает как у родителя (то есть просто price * 1)
class Product {
  constructor(name, price, quantity){
    this.name = name;
    this.price = price;
    this._quantity = quantity;
  }

  get totalPrice() {
    return this.price * this._quantity;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    if (value < 0) {
      console.log('кол-во не может быть отрицательным')
    } else {
      this._quantity = value;
    }
  }

  describe() {
    return `Товар: ${this.name}, Цена: ${this.price}, Кол-во: ${this._quantity}`;
  }

  static isProduct(obj) {
    return obj instanceof Product;
  }
}

class DigitalProduct extends Product {
  constructor(name, price){
    super(name, price);
    this.quantity = 1;
  }

  describe(){
    return super.describe() + '(Цифровой товар)';
  }
  get totalPrice() {
    return this.price * this.quantity;
  }
}

let p1 = new Product("Книга", 500, 3);
console.log(p1.totalPrice); // 1500
p1.quantity = -5;           // игнорируется
console.log(p1.quantity);   // 3
console.log(p1.describe()); // Товар: Книга, Цена: 500, Кол-во: 3

let p2 = new DigitalProduct("Электронная книга", 300);
console.log(p2.totalPrice); // 300
console.log(p2.describe()); // Товар: Электронная книга, Цена: 300, Кол-во: 1 (Цифровой товар)

console.log(Product.isProduct(p1)); // true
console.log(Product.isProduct(p2)); // true
console.log(Product.isProduct({})); // false