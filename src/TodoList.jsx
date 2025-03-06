import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";

function TodoList() {

    const [tasks, setTasks] = useState([]);

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
        </section>
    );
}

export default TodoList;