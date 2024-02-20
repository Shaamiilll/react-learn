import { useState , u } from 'react';
import TodoItem from './TodoItem';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]); 
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }
    const [count , setCount] = useState(0)
    
        <div>{count}</div>
    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div className="todo-input">
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button onClick={() => addTask(text)}>Add</button>
            </div>
            <ul className="tasks">
                {tasks.map(task => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
            </ul>

        </div>
    );
}
