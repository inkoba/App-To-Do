var inputData = document.getElementById('inputTask');
var btnAdd = document.getElementById('btn-add');
var ulList = document.querySelector('#list');
var spans = document.getElementsByTagName('span');
var btnSave = document.getElementById('btn-save');
var btnClear = document.getElementById('btn-clear');
var btnFIO = document.getElementById('btn-fio');


function addToDo() {
    if (inputData.value.trim()) {
        var inputContent = inputData.value;

        inputData.value = "";

        var newLi = document.createElement('li');
        newLi.textContent = inputContent;
        newLi.className = "box";

        var newSpan1 = document.createElement('span');
        newSpan1.innerText = " " + nowDate() + " " + ' DELETE';

        ulList.appendChild(newLi).append(newSpan1);
        boxLine();
        deleteToDo();
        counter();
    }
}

function nowDate() {
    var now = new Date()
    var setDate = 0;
    var setMonth = 0;

    if (now.getDate() < 10) {
        setDate = '0' + now.getDate();
    } else (now.getMonth() < 10)
    setMonth = '0' + now.getMonth();

    return (setDate + '.' + setMonth + '.' + now.getFullYear() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds())
}

function deleteToDo() {
    for (let span of spans) {
        span.onclick = function () {
            span.parentElement.remove()
        }
    }
}

function saveTodos() {
    localStorage.setItem("todo-app", ulList.innerHTML);
    boxLine();
    deleteToDo();
    counter();
}
function clearTodos() {
    ulList.innerHTML = '';
    localStorage.setItem("todo-app", ulList.innerHTML);
    boxLine();
    deleteToDo();
    counter();
}
function loadTodo() {
    if (localStorage.getItem('todo-app')) {
        ulList.innerHTML = localStorage.getItem('todo-app');
        boxLine();
        deleteToDo();
        counter();
    }
}

function fio() {
    var aaa = document.getElementById('hide');
    aaa.style.cssText = 'display:block';
}

function boxLine() {
    var listLi = document.getElementsByClassName("box")
    for (let tiem of listLi) {
        tiem.onclick = function () {
            tiem.setAttribute("class", "boxLine")
            counter()
        }
    }
}

function counter() {
    var n = document.getElementById('num')
    n.innerHTML = document.querySelectorAll('.box').length
    var non = document.getElementById('non-num')
    non.innerHTML = document.querySelectorAll('.boxLine').length
}

nowDate()
counter()
boxLine()
loadTodo()
deleteToDo() // эта вызов функции для возможности удалить задачу
btnAdd.onclick = addToDo; // при клике на кнопку вызывай эту функцию
btnSave.onclick = saveTodos; // при клике вызывает функцию которая записывает в хранилище
btnClear.onclick = clearTodos;//удаляет все элементы
btnFIO.onclick = fio; //выводит ФИО