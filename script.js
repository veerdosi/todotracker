function onload()
{
  document.getElementById("addButton").addEventListener("click", function(event){
    event.preventDefault();
    addToDo();
  });
}

function addToDo()
{  
  var todoText = document.getElementById('todo-textbox').value;
  var link = document.getElementById('links').value;
  console.log("text: ", todoText);
  console.log("link: ", link);
  var todoList = document.getElementById('todo-list');
  
  var newToDo = document.createElement("div"); 

  var textTodo = document.createElement("p"); 
  textTodo.setAttribute('class', 'textTodo');
  textTodo.innerHTML = todoText;
  var a = document.createElement("a");
  var linkText = document.createTextNode("A Link");
  a.appendChild(linkText);
  a.href = link;
  a.setAttribute('class', 'linkText');
  textTodo.appendChild(a);
  textTodo.style.display = "inline-block";

  var checkbox = document.createElement("input"); 
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'checkbox');
  checkbox.style.display = "inline";
  checkbox.addEventListener("click", function(event) {
    textTodo.style.textDecoration = 'line-through';
  });

  var yaybutton = document.createElement("button"); 
  yaybutton.setAttribute('type', 'button');
  yaybutton.setAttribute('class', 'yaybutton');
  yaybutton.textContent = 'Yay, I did it!';
    yaybutton.style.display = "inline";
  yaybutton.addEventListener("click", function(event) {
    textTodo.style.textDecoration = 'line-through';
  });

  newToDo.appendChild(checkbox);
  newToDo.appendChild(textTodo);
  newToDo.appendChild(yaybutton);

  todoList.appendChild(newToDo);

  document.getElementById('todo-textbox').value = '';
  document.getElementById('links').value = '';
}

