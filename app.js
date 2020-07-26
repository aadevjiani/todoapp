// To Do App
var list = document.getElementById("list")


function addTodo(){
    var todo_task = document.getElementById("todo-task")
    
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_task.value)
    li.appendChild(liText)

    
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Remove")
    delBtn.setAttribute("class","btn")  
    delBtn.setAttribute("onclick","deleteTask()")  
    delBtn.appendChild(delText)

    li.appendChild(delBtn)
    
    list.appendChild(li) 
    
    todo_task.value =""

    console.log(li)
} 

function deleteTask(){
    console.log("checker")
}

// addTodo()