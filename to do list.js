document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Add task
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="remove-task">✘</button>
        `;
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';

        // Mark task as completed
        li.querySelector('.task-text').addEventListener('click', () => {
            li.querySelector('.task-text').classList.toggle('task-completed');
        });

        // Remove task
        li.querySelector('.remove-task').addEventListener('click', () => {
            taskList.removeChild(li);
        });
    });

    // Allow pressing Enter to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
