// 1 Функция delay(ms) должна возвращать промис,
//   который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
//   function delay(ms) {
//     ваш код
//   }
//   delay(3000).then(() => alert('выполнилось через 3 секунды'));

function delay(ms) {
  return new Promise(resolve => 
    setTimeout(resolve, ms))
}

// delay(3000).then(() => console.log('выполнилось через 3 секунды')) // выполнилось через 3 секунды

// 2 Перепишите функцию showCircle, написанную
//   в задании Анимация круга с помощью колбэка
//   таким образом, чтобы она возвращала промис,
//   вместо того чтобы принимать в аргументы функцию-callback.
//   Новое использование:

  function go() {
    showCircle(150, 150, 100, div => {
      div.classList.add('message-ball');
      div.append("Привет, мир!");
    });
  }

  function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    })
  }

// отрисовка круга. в изначальной функции callback вместо promise

// 3 Создай функцию getUserData, которая возвращает Promise.
//   Этот промис должен "разрешаться" через 2 секунды с
//   объектом пользователя { name: 'Alice', age: 25 }.
//   Также сделай вариант, когда промис "отклоняется"
//   с ошибкой "User not found" (например, по флагу shouldFail).

function getUserData(shouldFail) {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      if (shouldFail) {
        reject('User not found')
      } else {
        resolve({name: 'Alice', age: 25});
      }
    }, 2000);
  });
}

// getUserData(false)
  // .then(user => console.log('User:', user))  // User: { name: 'Alice', age: 25 }
  // .catch(err => console.error('Error:', err));

// getUserData(true)
  // .then(user => console.log('User:', user)) 
  // .catch(err => console.error('Error:', err)); // Error: User not found

// 4 На основе задачи 1 добавь цепочку: после получения
//   пользователя выведи его имя заглавными буквами, затем возраст,
//   а в finally напиши "Запрос завершён".

getUserData(false)
  .then(user => {
    console.log('name:', user.name.toUpperCase()) // name: ALICE
    return user.age;
  })
  .then(age => {
    console.log ('age:', age); // age: 25
  })
  .catch(err => console.error('Error:', err))
  .finally(() => {
    console.log('Запрос завершен') // 'Запрос завершен'
  });

// 5 Описание:
//   Создай три функции api1, api2, api3, каждая из которых
//   возвращает промис с разным временем ответа
//   (например, 1000, 2000, 3000 мс). Используй:
//   Promise.all — получить все результаты
//   Promise.race — получить первый результат
//   Promise.any — получить первый успешный результат

function api1(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('api1: done')
    }, 1000)
  })
}

function api2(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('api2: done')
    }, 2000)
  })
}

function api3(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('api3: fail');
    }, 3000)
  })
}

Promise.all([api1(), api2(), api3()])
  .then(results => console.log('All results:', results)) // выведет All results: [ 'api1: done', 'api2: done', 'api3: done' ]
                                                        // если все промисы будут resolved
  .catch(err => console.error('Error all:', err)); // Error all: api3: fail

Promise.race([api1(), api2(), api3()])
  .then(result => console.log("Promise.race result:", result)) // Promise.race result: api1: done
  .catch(err => console.error("Promise.race error:", err)); //  если api3 с reject выполнится первым- 
                                                            // Promise.race error: api3: fail

Promise.any([api1(), api2(), api3()])
  .then(result => console.log("Promise.any result:", result)) // Promise.any result: api1: done (первый УСПЕШНЫЙ)
  .catch(err => console.error("Promise.any error:", err)); // если все rejected - Promise.any error: [AggregateError: All promises were rejected] {
                                                          // [errors]: [ 'api1: fail', 'api2: fail', 'api3: fail' ]

// 6 Использовать уже написанную функцию getUserData(shouldFail) из задачи 1
//   И переписать обработку через async/await, с:
//   try для основного кода
//   catch для ошибок
//   finally для завершающего действия

async function fetchUser(shouldFail) {
  try {
    const user = await getUserData(shouldFail);
    console.log("Имя:", user.name.toUpperCase());
    console.log("Возраст:", user.age);
  } catch (error) {
    console.error("Ошибка:", error);
  } finally {
    console.log("Запрос завершён");
  }
}

fetchUser(false); // Имя: ALICE
                  // Возраст: 25
                  // Запрос завершён
// fetchUser(true); // ошибка
