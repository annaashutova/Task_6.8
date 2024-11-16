let consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

let alert1 = document.querySelector('#alert1');

alert1.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
})

let prompt1 = document.querySelector('#prompt1');

prompt1.addEventListener('click', () => {
    prompt('Отображает диалоговое окно с запросом на ввод текста', 'Все понятно');
})