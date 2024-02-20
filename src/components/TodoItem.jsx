import React from 'react';  

function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <div className="flex items-center mb-2">
            <input
                type="checkbox"
                className="mr-2"
                checked={task.completed}
                onChange={handleChange}
            />
            <p className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                {task.text}
            </p>
            <button
                className="bg-red-500 text-white rounded px-2 py-1"
                onClick={() => deleteTask(task.id)}
            >
                X
            </button>
        </div>
    );
}

export default TodoItem;
