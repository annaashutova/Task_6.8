let inputText = document.querySelector('input');

let dupField = document.querySelector('#duplicateField')

inputText.addEventListener('input',() => {
    dupField.textContent = inputText.value;
})

dupField.addEventListener('#duplicateField', () => {
    inputText.textContent = dupField.value;
})

let button1 = document.querySelector('button');
button1.addEventListener('click', (event) => {
    console.log('', dupField.textContent);
    event.preventDefault();
    
    dupField.textContent = '';
    inputText.value = '';
})