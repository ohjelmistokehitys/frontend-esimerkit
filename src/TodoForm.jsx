
import { Button, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";

// Create a new empty task with the current date as the deadline
const emptyTask = () => ({ description: "", deadline: dayjs().format("YYYY-MM-DD") });


export default function TodoForm({ addTask }) {
    const [task, setTask] = useState(() => emptyTask());

    const valid = task.description && task.deadline && dayjs(task.deadline).isValid();

    function submit(event) {
        event.preventDefault();

        addTask({ ...task, id: new Date().getTime() });
        setTask(emptyTask());
    }

    return (
        <Stack direction="row" sx={{ gap: { xs: 1, sm: 2 } }}>
            <TextField
                label="Description"
                variant="outlined"
                required
                value={task.description}
                onChange={e => setTask({ ...task, description: e.target.value })}
            />
            <DatePicker
                required
                size="small"
                label="Deadline"
                value={dayjs(task.deadline)}
                onChange={(deadline) => setTask({ ...task, deadline: deadline.format("YYYY-MM-DD") })}
                variant="outlined"
            />
            <Button variant="outlined" onClick={submit} disabled={!valid}>
                Save
            </Button>
        </Stack>
    );
}