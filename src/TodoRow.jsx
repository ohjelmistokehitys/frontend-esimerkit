import { Button, Checkbox, TableCell, TableRow } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import "dayjs/locale/fi";

export default function TodoRow({ task, remove }) {
    const [done, setDone] = useState(false);

    // See https://day.js.org/docs/en/display/format
    const dateStr = dayjs(task.deadline).locale("fi").format("l");

    return <TableRow>
        <TableCell>
            <Checkbox value={done} onClick={() => setDone(!done)} aria-label={`Mark ${task.description} done`} />
        </TableCell>
        <TableCell>
            {task.description}
        </TableCell>
        <TableCell>
            {dateStr}
        </TableCell>
        <TableCell>
            <Button onClick={remove} variant="outlined" aria-label={`Remove ${task.description}`}>🗑️</Button>
        </TableCell>
    </TableRow>
}