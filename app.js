const todoInput = document.querySelector('.todo-input')
const btnAdd = document.querySelector('.btn-add');
const todoList = document.querySelector('.todo-list');

btnAdd.addEventListener('click', addTodo);

function addTodo(event) {
    event.preventDefault();

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const todoText = document.createElement('p');
    todoText.classList.add('todo-text');
    todoText.innerText = todoInput.value;

    const todoItemDone = document.createElement('div');
    todoItemDone.classList.add('todo-item-done');

    const btnDone = document.createElement('button');
    btnDone.classList.add('btn-done', 'btn');
    btnDone.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete', 'btn');
    btnDelete.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';

    todoItem.append(todoItemDone);
    todoItemDone.append(btnDone);
    todoItemDone.append(todoText);
    todoItem.append(btnDelete);
    todoList.append(todoItem);
}