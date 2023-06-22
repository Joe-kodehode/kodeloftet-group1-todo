// To start, we create our global variables, making it easier to target our 'input', 'add task button' and 'empty ul' which we created in the HTML.
const inputElement = document.querySelector("#task-input");
const addTaskButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

// adding an event-listener to our 'add-task' button so that the addTask function will run when the button is clicked.
addTaskButton.addEventListener("click", addTask);

// the addTask function contains all the code which will run when we click the 'add task' button.
function addTask() {
  // variable to store the user's input
  const task = inputElement.value;

  //   creating a li and storing it in a variable
  const listItem = document.createElement("li");

  //   creating a paragraph and storing it in a variable
  const textElement = document.createElement("p");

  //   putting the user's input inside the paragraph we just created
  textElement.textContent = task;

  // putting our paragraph inside the li
  listItem.appendChild(textElement);

  //   putting the li inside the ul (remember the ul is already in the html)
  taskList.appendChild(listItem);

  //   Delete Button
  //   first we create the button using createElement, we can store it inside the deleteButton variable.
  const deleteButton = document.createElement("button");
  //   next step is to put some text inside the delete button so the user knows what the button does.
  deleteButton.textContent = "Delete";
  //   we add an event-listener to the button, listening for a click. The function connected to the event-listener is a nameless function (no need for a name if it lives inside the event-listener). When the function runs, it removes the listItem using .remove
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  //   our final step is to append the delete button to the listItem. (earlier in the code we appended the paragraph to the listItem too, so the paragraph and delete buttons will be siblings, both are children of the li)
  listItem.appendChild(deleteButton);
}
