import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";
import dayjs from "dayjs";

const testData = [
    { description: "hello world", deadline: dayjs().add(1, 'days').format("YYYY-MM-DD"), id: 1 },
    { description: "terve maailma", deadline: dayjs().add(7, 'days').format("YYYY-MM-DD"), id: 2 }
];

function TodoList() {

    const [tasks, setTasks] = useState(testData);

    function addTask(newTask) {
        setTasks([...tasks, newTask]);
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
