


function set(key, value) {
    localStorage.setItem(key, value);

}

function getInt(name)
{
    var r = parseInt(localStorage.getItem(name));
    return r;
}
function addTodo() {
    var value = document.getElementById("todoText").value;
    if(value == "") {
      alert("Error: please enter a todo text.");
      return;
    }
    var count = localStorage.getItem('count');
    if(count == null) {
      localStorage.setItem("count", '0');
      count = localStorage.getItem('count');
    }
    var countInt = parseInt(count);
    countInt += 1;
    localStorage.setItem("count", countInt)


    var key = "todo" + (countInt - 1).toString();

    document.getElementById("todoText").value = "";
    localStorage.setItem(key, value);
    displayTodo();
}
function clearTodo(){
  localStorage.setItem('count', '0');
  displayTodo();
  document.getElementById("listDisplay").innerHTML = "No Todo's";

}
function displayTodo(){

    var count = parseInt(localStorage.getItem('count'));
    var pText = "";
    var numberOfTodos = 0;
    for(var i = 0; i < count; i++){
        var todoText = localStorage.getItem("todo" + i.toString());
        if(todoText == null) {
          count += 1;
          continue;
        }
        if(todoText.charAt(0) == '+') {
          var len = todoText.length;
          todoText = todoText.substring(1, len);
          pText += "<p>";
          pText += "<button onclick='deleteTodo("+i.toString()+")' id='b" + (i+1).toString() +  "'  >Delete</button>";
          pText += "<button onclick='uncheckTodo("+i.toString()+")' id='b" + (i+1).toString() +  "'  >UnCheck</button>";
          pText += "  Todo # " + (1 + i).toString() + " :\t";
          pText += "<span class='completed'>" + todoText + "</span>";

          pText += "</p>";
        }
        else {
          pText += "<p>";
          pText += "<button onclick='deleteTodo("+i.toString()+")' id='b" + (i+1).toString() +  "'  >Delete</button>";
          pText += "<button onclick='checkTodo("+i.toString()+")' id='b" + (i+1).toString() +  "'  >Check</button>";
          pText += "  Todo # " + (1 +i ).toString() + " :\t";
          pText += "<span class='uncompleted'>" + todoText + "</span>";

          pText += "</p>";
          numberOfTodos += 1;
        }
    }
    document.getElementById("listDisplay").innerHTML = pText;
    document.getElementById("todoCount").innerHTML = numberOfTodos;
}
function deleteTodo(todoNum) {
    localStorage.removeItem( "todo" + todoNum.toString());
    localStorage.setItem('count', (parseInt(localStorage.getItem('count')) - 1 ).toString());
    displayTodo();
}
function checkTodo(todoNum) {
    var key = "todo" + todoNum.toString();
    var value =  localStorage.getItem(key);
    value = "+" + value;
    localStorage.setItem(key, value);
    displayTodo();
}
function uncheckTodo(todoNum) {
    var key = "todo" + todoNum.toString();
    var value =  localStorage.getItem(key);
    var len = value.length;
    value = value.substring(1, len);
    localStorage.setItem(key, value);
    displayTodo();
}
function initPage(){
    var count = parseInt(localStorage.getItem('count'));

    if(count == 0) {
        clearTodo();
    }
    displayTodo();
}
