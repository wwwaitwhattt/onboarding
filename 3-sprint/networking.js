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

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(object)
        })

        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.error('error', err)
    }
}

createPost_async() // { title: 'Hello', body: 'world', userId: 1, id: 101 }

// 4 Напиши функцию getPost(id), которая делает GET-запрос на
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