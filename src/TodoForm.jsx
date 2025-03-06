import { useState } from "react";

const EMPTY_TASK = Object.freeze({ description: "", deadline: "" });


export default function TodoForm({ addTask }) {
    const [task, setTask] = useState(EMPTY_TASK);

    function submit(event) {
        event.preventDefault();

        addTask({ ...task, id: new Date().getTime() });
        setTask(EMPTY_TASK);
    }

    return (
        <form onSubmit={submit}>
            <label>
                Description
                <input placeholder="Add description..."
                    value={task.description}
                    onChange={e => setTask({ ...task, description: e.target.value })}
                    required />
            </label>
            <label>
                Deadline
                <input type="date"
                    value={task.deadline}
                    onChange={e => setTask({ ...task, deadline: e.target.value })}
                    required />
            </label>
            <button>Save</button>
        </form>
    );
}