import { Button, Stack, TextField } from "@mui/material";
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
            <Stack direction="row" sx={{ gap: { xs: 1, sm: 2 } }}>
                <TextField
                    label="Description"
                    variant="outlined"
                    size="small"
                    value={task.description}
                    onChange={e => setTask({ ...task, description: e.target.value })}
                />
                <TextField label="Deadline"
                    variant="outlined"
                    size="small"
                    value={task.deadline}
                    onChange={e => setTask({ ...task, deadline: e.target.value })} />
                <Button variant="outlined">
                    Save
                </Button>
            </Stack>
        </form>
    );
}