const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos"

// 처음에 const로 했다가 에러나서 한참찾음.. 그리고 let으로 변경함
let toDos = []

function saveTodos () {
    localStorage.setItem( TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo (e) {
    const li = e.target.parentElement
    li.remove()
}

function paintToDo (newToDo) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newToDo

    const btn = document.createElement("button")
    btn.innerText = "X"
    btn.addEventListener("click", deleteToDo)

    li.appendChild(span);
    li.appendChild(btn);

    toDoList.appendChild(li)
}

function handleToDoSave (e) {
    e.preventDefault();
    const newToDo =  toDoInput.value
    toDoInput.value = ""

    c

    toDos.push(newToDo)
    paintToDo(newToDo)
    saveTodos()
}

toDoForm.addEventListener("submit", handleToDoSave)

const savedToDos = localStorage.getItem(TODOS_KEY)

if ( savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    
} 