import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";
import TodoGrid from "./TodoGrid";

function TodoList() {

    const [tasks, setTasks] = useState([
        { description: "hello world", deadline: "2025-03-06", id: 1 },
        { description: "terve maailma", deadline: "2025-03-06", id: 2 }
    ]);

    function addTask(newTask) {
        setTasks([...tasks, newTask]);
    }

    function removeById(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    // TODO: move table to separate component
    return (
        <section>
            <TodoForm addTask={addTask} />

            <TodoTable tasks={tasks} removeById={removeById} />
            <TodoGrid tasks={tasks} />
        </section>
    );
}

export default TodoList;