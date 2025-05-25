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

delay(3000).then(() => console.log('выполнилось через 3 секунды')) 

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
