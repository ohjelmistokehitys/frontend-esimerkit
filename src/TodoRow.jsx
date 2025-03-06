import { useState } from "react"


export default function TodoRow({ task, remove }) {
    const [done, setDone] = useState(false);

    return <tr>
        <td>
            <input type="checkbox" value={done} onClick={() => setDone(!done)} />
        </td>
        <td>
            {task.description}
        </td>
        <td>
            {task.deadline}
        </td>
        <td>
            <button onClick={remove}>🗑️</button>
        </td>
    </tr>
}