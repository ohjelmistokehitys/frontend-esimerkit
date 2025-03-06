import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoRow from "./TodoRow";

function TodoList() {

    const [tasks, setTasks] = useState([]);

    function addTask(newTask) {
        if (tasks.includes(newTask)) {
            return false;
        }
        setTasks([...tasks, newTask]);
    }

    function removeByIndex(index) {
        setTasks(tasks.filter((t, i) => i !== index));
    }

    return (
        <section>
            <TodoForm addTask={addTask} />

            <table>
                <thead>
                    <tr>
                        <th>Done</th>
                        <th>Task</th>
                        <th>Deadline</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody aria-live="polite">
                    {tasks.map((t, i) => <TodoRow key={i} task={t} remove={() => removeByIndex(i)} />)}
                </tbody>
            </table>
        </section>
    );
}

export default TodoList;