document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("input-box");
    const addButton = document.getElementById("add-button");
    const listContainer = document.getElementById("list-container");

    addButton.addEventListener("click", () => {
        const taskText = inputBox.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";

        const taskLabel = document.createElement("span");
        taskLabel.className = "task-label";
        taskLabel.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.className = "task-delete-btn";
        deleteButton.textContent = "x";

        deleteButton.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(taskLabel);
        li.appendChild(deleteButton);

        listContainer.appendChild(li);


        inputBox.value = "";
    });
});
