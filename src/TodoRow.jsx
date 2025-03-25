import { Button, Checkbox, TableCell, TableRow } from "@mui/material";
import { useState } from "react";


export default function TodoRow({ task, remove }) {
    const [done, setDone] = useState(false);

    const deadline = new Date(task.deadline);
    const dateStr = `${deadline.getDate()}.${deadline.getMonth() + 1}.${deadline.getFullYear()}`;

    return <TableRow>
        <TableCell>
            <Checkbox value={done} onClick={() => setDone(!done)} slotProps={{ input: { "aria-label": `Delete ${task.description}` } }} />
        </TableCell>
        <TableCell>
            {task.description}
        </TableCell>
        <TableCell>
            {dateStr}
        </TableCell>
        <TableCell>
            <Button onClick={remove} variant="outlined">🗑️</Button>
        </TableCell>
    </TableRow>
}