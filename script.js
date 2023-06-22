const inputElement = document.querySelector("#task-input");
const addTaskButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

addTaskButton.addEventListener("click", addTask);

// By adding an eventlistener to the document, we can listen for a keydown. Using "if" we can check which key is entered and run some code depending on the key. In our example, if the key is "Enter" then we run the addTask function.
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const task = inputElement.value;
  // Now that we've placed our input into the "task" variable, we can clear the input.
  inputElement.value = "";

  // Here we use an "if" to check if the task is the same as an empty string, if it is then we run an alert and "return" out of the function so no code below is read.
  if (task === "") {
    alert("Please enter a task !");
    return;
  }

  //   creating li / p
  const listItem = document.createElement("li");
  listItem.className = "task-list-item";

  const textElement = document.createElement("p");
  textElement.textContent = task;

  //   appending li / p
  listItem.appendChild(textElement);
  taskList.appendChild(listItem);

  //   delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  // Here we add a class to our newly created delete button so we can give it some CSS.
  deleteButton.className = "delete-button";
  listItem.appendChild(deleteButton);
}
