import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";
import { saveTasks, loadTasks } from "./storage";


function TodoList() {

    // loads tasks from local storage and keeps them in the state
    const [tasks, setTasks] = useState(() => loadTasks());

    useEffect(() => {
        // When ever the tasks change, they are saved to local storage.
        saveTasks(tasks);
    }, [tasks]);

    function addTask(newTask) {
        setTasks([...tasks, newTask]); // adds the task to the state
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
