const todoInput = document.querySelector('.todo-input')
const btnAdd = document.querySelector('.btn-add');
const todoBtns = document.querySelector('.todo-btns');
const todoClear = document.querySelector('.fa-circle-xmark');
const todoList = document.querySelector('.todo-list');
const alertMessage = document.querySelector('.alert-message');

todoInput.focus();

btnAdd.addEventListener('click', addTodo);

function addTodo(event) {
    event.preventDefault();

    if (todoInput.value.length < 3) {
        alertMessage.classList.add('show');
        todoInput.focus();
        return;
    }

    alertMessage.classList.remove('show');

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const todoText = document.createElement('p');
    todoText.classList.add('todo-text');
    todoText.innerText = todoInput.value;

    const todoItemDone = document.createElement('div');
    todoItemDone.classList.add('todo-item-done');

    const btnDone = document.createElement('button');
    btnDone.classList.add('btn-done', 'btn');
    btnDone.innerHTML = '<i class="fa-solid fa-circle"></i>';

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete', 'btn');
    btnDelete.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';

    todoItem.append(todoItemDone);
    todoItemDone.append(btnDone);
    todoItemDone.append(todoText);
    todoItem.append(btnDelete);
    todoList.append(todoItem);
    todoInput.value = '';
    todoBtns.classList.remove('show');
    todoInput.focus();
}

todoInput.addEventListener('input', inputHandler);

function inputHandler(event) {
    if (event.target.value.length) {
        todoBtns.classList.add('show');
    } else {
        todoBtns.classList.remove('show');
    }
}

todoClear.addEventListener('click', (event) => {
    event.preventDefault();
    todoInput.value = '';
    todoBtns.classList.remove('show');
    todoInput.focus();
});

document.addEventListener('keydown', (event) => {
    if (event.code.toLowerCase() === 'enter') {
        addTodo(event);
    }
});

document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList[1] === 'fa-circle') {
        target.classList.remove('fa-circle');
        target.classList.add('fa-circle-check');
        target.parentElement.nextElementSibling.classList.add('checked');
    } else if (target.classList[1] === 'fa-circle-check') {
        target.classList.remove('fa-circle-check');
        target.classList.add('fa-circle');
        target.parentElement.nextElementSibling.classList.remove('checked');
    }

    if (target.classList[1] === 'fa-circle-minus') {
        const todo = target.parentElement.parentElement;
        todo.remove();
        // todo.classList.add('disappearing');
    }

    return;
});

//localstorage
//infinite animation
//date
//sort with storage