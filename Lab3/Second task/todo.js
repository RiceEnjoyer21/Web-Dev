const task = document.getElementById("task");
const list = document.getElementById("list");

function addTask(){
    if(task.value === ''){
        alert("To add a task you need to write something, bro")
    }
    else{
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.appendChild(checkbox);
        let taskText = document.createElement("span");
        taskText.textContent = task.value;
        li.appendChild(taskText);
        let del = document.createElement("span");
        del.innerHTML = '<img src="rem.png" alt="del" width="10" height="10">';
        li.appendChild(del);
        list.appendChild(li);
        del.addEventListener("click", function () {
            li.remove();
        });
        checkbox.addEventListener("change", function () {
            li.classList.toggle("checked", this.checked);
        });
    }
    task.value = "";
}