const a1 = document.querySelector('#link');

a1.addEventListener('click',(event) => {
    const pText = prompt('Введите текст для новой ссылки');
    a1.textContent = pText;
    console.log('link is not available')
    event.preventDefault();
})

