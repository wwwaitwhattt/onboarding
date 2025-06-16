// 1 куки

// срок действия куки истекает через 1 день
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "user=john; expires=" + date;

// куки будут удалены через 1 час
document.cookie = "user=john; max-age=3600";

// добавялем в куки запись
const setCookie = (name, value) => {
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
}
setCookie('date of birth', 'february 4, 1996')
console.log(document.cookie)

// получить запись из куки
const getCookie = (name) => {
    for (const entryStr of document.cookie.split('; ')) {
        const [entryName, entryValue] = entryStr.split('=')
        if (decodeURIComponent(entryName) === name){
            return decodeURIComponent(entryValue)
        }    
    }
}
console.log(getCookie('user'))
console.log(getCookie('date of birth'))

// 2 sessionStorage 

sessionStorage.setItem('username', 'john')
sessionStorage.setItem('age', 60)
sessionStorage.setItem(
    'user',
    JSON.stringify({
        name: 'alise',
        age: 22,
        isAvailable: false,
    })
)

console.log(sessionStorage.getItem('username')) // john
console.log(sessionStorage.getItem('age')) // 60
console.log(JSON.parse(sessionStorage.getItem('user'))) //  json объект: {name: 'alise', age: 22, isAvailable: false}

// очищаем хранилище 
sessionStorage.clear()

// 3 Создайте поле textarea, значение которого будет автоматически
//   сохраняться при каждом его изменении.
//   Когда пользователь закроет страницу и потом откроет её заново
//   он должен увидеть последнее введённое значение.

area.value = localStorage.getItem('area');
area.oninput = () => {
  localStorage.setItem('area', area.value)
};



