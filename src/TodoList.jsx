import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";
import { saveTasks, loadTasks } from "./storage";


function TodoList() {

    const [tasks, setTasks] = useState(() => loadTasks());

    function addTask(newTask) {
        setTasks([...tasks, newTask]);
        saveTasks([...tasks, newTask]);
    }

    function removeById(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return <>
        <TodoForm addTask={addTask} />
        <TodoTable tasks={tasks} removeById={removeById} />
    </>
}

export default TodoList;
