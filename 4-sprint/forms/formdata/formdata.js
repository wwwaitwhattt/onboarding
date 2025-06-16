// сбор данных с формы
// 1

const formElement = document.querySelector('form')

formElement.addEventListener('submit', (event) =>  {
    event.preventDefault()

    const formData ={}

    for (const element of formElement.elements) {
        if (!element.name) {
            continue
        }
        if (element.type === 'checkbox') {
            formData[element.name] = element.checked
            continue
        }
        if (element.type === 'radio' && !element.checked) {
            continue
        }

        formData[element.name] = element.value
    } 

  console.log(formData)
})

// 2

formElement.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(formElement)

  formData.append('1', 'qweerty')
  console.log('name:', formData.get('1'))
  console.log('есть запись по name', formData.has('1'))
  formData.delete('1')

  console.log( Object.fromEntries(formData) )
})
