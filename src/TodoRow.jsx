import { Button, Checkbox, TableCell, TableRow } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import "dayjs/locale/fi";

export default function TodoRow({ task, remove }) {
    const [done, setDone] = useState(false);

    const deadline = dayjs(task.deadline);

    // See https://day.js.org/docs/en/display/format
    const dateStr = deadline.locale("fi").format("l");

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