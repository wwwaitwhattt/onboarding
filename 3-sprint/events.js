// 1 см. index.html

// 2 
document.getElementById('hider').onclick = function () {    
    document.getElementById('text').hidden = true;  // скрывает текст text
}

// 3

const buttonElement = document.querySelector('button')

console.log(buttonElement) 

// buttonElement.addEventListener('click', () => {
//     console.log(1)
// })

// или

const btnFunc1 = function() {
    console.log(1)
}

const btnFunc2 = function() {
    console.log(2)
}

buttonElement.addEventListener('click', btnFunc1) // при нажатии 1 
buttonElement.addEventListener('click', btnFunc2) // и сразу 2 

// 4 удаление обработчика

const firstButtonElement = document.querySelector('.button-1')

const logMessage = () => {
    console.log('click')
}

firstButtonElement.addEventListener('click', logMessage)

const secondButtonElement = document.querySelector('.button-2')

secondButtonElement.addEventListener('click', () => {
    firstButtonElement.removeEventListener('click', logMessage) // обработчик удален, click не выводится в консоль
})

// 5 всплытие и погружение

const firstBox = document.querySelector('.box-1')
const secondBox = document.querySelector('.box-2')
const thirdBox = document.querySelector('.box-3')

firstBox.addEventListener('click', (event) => {
    console.log('клик box-1', event.target, event.currentTarget)
})

secondBox.addEventListener('click', (event) => {
    console.log('клик box-2')
    event.stopPropagation()
}, true) // с true всплытие прерывается на box-2

thirdBox.addEventListener('click', function() {
    console.log('клик box-3', this) // то же самое что и event.currentTarget
})

// 6 делегирование

const onTodoItemClick = (todoItemElement) => {
    todoItemElement.classList.add('is-completed')
}

document.addEventListener('click', (event) =>{
    console.log(event.target)
    
    const todoItemElement = event.target.closest('.todo__item') // span мешает нажать на todo__item

    if (todoItemElement){
        onTodoItemClick(todoItemElement)
    }
})

// 7 кастомные события
// при клике вызывается кастомное событие

const myElement = document.getElementById('someEl')

myElement.addEventListener('userLogin', function(event) {
    alert('userlogin: ' + event.detail.username)
})

myElement.addEventListener('click', () => {
    var myEvent = new CustomEvent("userLogin", {
        detail: {
            username: "qwerty1"
        }
    });

    myElement.dispatchEvent(myEvent);
})


