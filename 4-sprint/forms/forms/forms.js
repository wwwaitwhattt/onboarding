// 1 работа с элементами формы

console.log('все <form>:', document.forms)
console.log('регистрация:', document.forms.registrationForm)
console.log('авторизация:', document.forms.authForm)

const formElement = document.querySelector('#registrationForm')
console.log(formElement.login) // <input id="login" name="login">
console.log(formElement.password) // <input id="password" name="password" type="password">
console.log(formElement.gender) // RadioNodeList(2) [input#male, input#female, value: '']

///////////////////////////////////////

const formEl = document.querySelector('form')
const loginEl = formEl.login
const passEl = formEl.password

// loginEl относится к форме ->
console.log(loginEl.form) // <form id="registrationForm" action="/registration" method="post">…</form>

// passEl относится к форме ->
console.log(passEl.form) // <form id="registrationForm" action="/registration" method="post">…</form>

// листбокс не относится к форме в разметке, но если добавить
// атрибут form="registrationForm" селекту, то --->
console.log(document.querySelector('#city').form) // <form id="registrationForm" action="/registration" method="post">…</form>

////////////////////////////////////////

const aboutEl = formEl.about

loginEl.value = 'admin'
aboutEl.value = 'qwerty'

/// radio elements

const gender = formEl.gender
console.log(gender) // RadioNodeList(2) [input#male, input#female, value: 'женский']
console.log(gender.value) // женский

// boolean -> 
console.log(gender[0].checked) // false
console.log(gender[1].checked) //true

// меняем значение радио

gender[0].checked = true
console.log(gender.value) // мужской
// или
gender.value = 'женский'
console.log(gender.value) // женский


// checkbox element

const checkboxEl = formEl.agreement
console.log(checkboxEl.checked) // true


// select element

selectEl = formEl.city
console.log(selectEl.options) //HTMLOptionsCollection(3) [option, option, option, selectedIndex: 2]
console.log(selectEl.selectedIndex) // 2
console.log(selectEl.options[selectEl.selectedIndex].value) // Ставрополь

selectEl.value = 'Москва'
console.log(selectEl.options[selectEl.selectedIndex].value) // Москва


// 2

// let form1 = document.forms.my; 
// let elem = form.elements.one; 

// alert(elem.value); // 1

// 3
// Выведите значение и текст выбранного пункта.
// Добавьте пункт: <option value="classic">Классика</option>.
// Сделайте его выбранным.

let selected = genres.options[genres.selectedIndex];
let newItem = new Option("Классика", "classic");
genres.append(newItem);

newItem.selected = true; // при перезагрузке всегда выбранный
