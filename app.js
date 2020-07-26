// To Do App
var list = document.getElementById("list")


function addTodo(){
    var todo_task = document.getElementById("todo-task")
    
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_task.value)
    li.appendChild(liText)

    //create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Remove")
    delBtn.setAttribute("class","btn")  
    delBtn.setAttribute("onclick","deleteTask(this)")  //when this is passed as argument, it calls entire button when function is called
    //if 'this' is writeen in string 'this' it will return word this otherwise if will return element
    delBtn.appendChild(delText)

    //create edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("class","editbtn")
    editBtn.appendChild(editText)


    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li) 
    
    todo_task.value =""

    // console.log(li)
} 

function deleteTask(e){             //e is a parameter any character/word canbe used elsewise
    // console.log(e.parentNode)
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML=""
}

// addTodo()