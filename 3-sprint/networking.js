// 1 Напиши функцию getUser(), которая выполняет GET-запрос
//   на адрес https://jsonplaceholder.typicode.com/users/1 и
//   выводит в консоль имя пользователя.
//   Подсказка: нужно вызвать fetch, распарсить response как 
//   JSON и взять поле name.

function getUser() {
    let user = fetch ('https://jsonplaceholder.typicode.com/users/1') // GET по умолчанию
    .then (response => response.json())
    .then (data => console.log(data.name))
    .catch (err => console.error('error', err))
    return user
}

getUser() // Leanne Graham

// 2 Напиши функцию createPost(), которая делает POST-запрос
//   на https://jsonplaceholder.typicode.com/posts, отправляя JSON-объект:
// {
//   title: 'Hello',
//   body: 'world',
//   userId: 1
// }
// Вывести в консоль полученный ответ от сервера.

function createPost() {
    const object = {
    title: 'Hello',
    body: 'world',
    userId: 1
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',   // есть PUT/DELETE/GET, put - обновляет, delete - удаляет, get - получает
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(object)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error('error', err))
}

createPost() // { title: 'Hello', body: 'world', userId: 1, id: 101 }

// с async/await

async function createPost_async() {
    const object = {
        title: 'Hello',
        body: 'world',
        userId: 1
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(object)
    })

    const data = await response.json();
    console.log(data);
}

createPost_async() // { title: 'Hello', body: 'world', userId: 1, id: 101 }

// 4 getPost(id), GET-запрос на
// https://jsonplaceholder.typicode.com/posts/{id}
// Если пост найден (status 200), выводит его.
// Если status 404 — выводит "Пост не найден".
// В остальных случаях — выводит "Ошибка: [код]".

async function getPost(id){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (response.status === 200) {
            let post = await response.json();
            console.log(post)
        } else if (response.status === 404) {
            console.log('not found')
        } else {
            console.log(`error: ${response.status}`)
        }
    } catch (err){
        console.error('error', err)
    }
}

getPost(1) // вывод
// {
//   userId: 1,
//   id: 1,
//   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//   body: 'quia et suscipit\n' +
//     'suscipit recusandae consequuntur expedita et cum\n' +
//     'reprehenderit molestiae ut ut quas totam\n' +
//     'nostrum rerum est autem sunt rem eveniet architecto'
// }


// 5 fetchUsers():
// Использует axios для GET-запроса по адресу:
// https://jsonplaceholder.typicode.com/users
// Выводит в консоль список пользователей в формате:
// [1] Leanne Graham (Sincere@april.biz)
// [2] Ervin Howell (Shanna@melissa.tv)
// ...
// Если произошла ошибка:
// "ошибка: [текст ошибки]"

const axios = require('axios');

async function fetchUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;

    users.forEach(user => {
      console.log(`[${user.id}] ${user.name} (${user.email})`);
    });

  } catch (error) {
    console.error('ошибка:', error.message);
  }
}

fetchUsers(); // вывод:
// [1] Leanne Graham (Sincere@april.biz)
// [2] Ervin Howell (Shanna@melissa.tv)
// [3] Clementine Bauch (Nathan@yesenia.net)
// [4] Patricia Lebsack (Julianne.OConner@kory.org)
// [5] Chelsey Dietrich (Lucio_Hettinger@annie.ca)
// [6] Mrs. Dennis Schulist (Karley_Dach@jasper.info)
// [7] Kurtis Weissnat (Telly.Hoeger@billy.biz)
// [8] Nicholas Runolfsdottir V (Sherwood@rosamond.me)
// [9] Glenna Reichert (Chaim_McDermott@dana.io)
// [10] Clementina DuBuque (Rey.Padberg@karina.biz)

// 6 divide(a, b), которая:
// Возвращает результат деления a / b
// Если b === 0, выбрасывает throw new Error("Деление на ноль")
// Добавь вызов функции с try/catch, и выведи
// "Ошибка: [текст ошибки]", если деление невозможно.

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('деление на ноль')
        }
        let division = a / b
        return division
    } catch (err) {
        console.error('ошибка', err)
    }
}

console.log(divide(1,0))
// ошибка Error: деление на ноль
// at divide (C:\Users\user\Desktop\workhard\onboarding\3-sprint\networking.js:149:19)
// undefined
console.log(divide(4,2)) // 2

// 7 асинхронная функция fetchUserData():
//   на https://jsonplaceholder.typicode.com/users/1
//   Обработка ошибки
//   В finally всегда "Завершено"

async function fetchUserData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')

        if (!response.ok) {
            throw new Error(`ошибка: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data)
    } catch(err) {
        console.error('error', err)
    } finally {
        console.log('завершено')
    }
}

fetchUserData() // {json c user data}
                // завершено

// 8 Promise.catch

function prom_catch(){
    return new Promise((_, reject) => {
        setTimeout(()=> {
            reject(new Error('какая-то ошибка'))
        }, 3000)
    })
}

prom_catch()
  .catch(error => {
    console.error('error', error.message);
  }
); // error какая-то ошибка

// 9 Создайте асинхронную функцию getUsers(names),
//  которая получает на вход массив логинов пользователей GitHub,
//  запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.
// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось,
// что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.

async function getUsers(names) {
  let jobs = [];

  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}

getUsers(['iliakan', 'remy', 'no.such.users']) // вернул промис с массивом
// 
// {login: 'iliakan', id: 349336, node_id: 'MDQ6VXNlcjM0OTMzNg==', avatar_url: 'https://avatars.githubusercontent.com/u/349336?v=4', gravatar_id: '', …}
// {login: 'remy', id: 13700, node_id: 'MDQ6VXNlcjEzNzAw', avatar_url: 'https://avatars.githubusercontent.com/u/13700?v=4', gravatar_id: '', …}
//  null

// 10 POST запрос, передаем объект
// работа с заголовками

async function sendSecurePost() {
    const object = {
        title: "Header test",
        body: "Check the headers",
        userId: 101
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer mySecretToken123'
        },
        body: JSON.stringify(object)
        })

        const data = await response.json();
        console.log(data)
    } catch (err) {
        console.error('error', err)
    }
}

console.log('sendsecure:')
sendSecurePost()