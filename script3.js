const addButton = document.getElementById('addButton');
const todoValue = document.getElementById('todoValue');
const todoList = document.getElementById('todoList');
const todoItem = document.getElementById('todoItem');

var todoArr = [];

addButton.addEventListener('click',addTodo);

function makeTodoList(){
    var ans = '';
    ans += '<ul>';

    for(var i=0;i<todoArr.length;i++){
        ans += '<li>' + todoArr[i] + '</li>';
    }
    ans += '</ul>';
    todoItem.innerHTML = ans;
}

function addTodo(){
    var value = todoValue.value;
    todoValue.value = '';
    todoArr.push(value);
    makeTodoList();
}

