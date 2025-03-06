import { useState } from "react"


export default function TodoRow({ task, remove }) {
    const [done, setDone] = useState(false);

    const deadline = new Date(task.deadline);
    const dateStr = `${deadline.getDate()}.${deadline.getMonth() + 1}.${deadline.getFullYear()}`;

    return <tr>
        <td>
            <input type="checkbox" value={done} onClick={() => setDone(!done)} />
        </td>
        <td>
            {task.description}
        </td>
        <td>
            {dateStr}
        </td>
        <td>
            <button onClick={remove}>🗑️</button>
        </td>
    </tr>
}