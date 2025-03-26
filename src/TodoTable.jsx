import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TodoRow from './TodoRow';
import { useMemo } from 'react';

export default function TodoTable({ tasks, removeById }) {

    // Tasks are sorted by deadline. They are memoized to avoid having to sort them on every render.
    const sorted = useMemo(() => tasks.sort((a, b) => a.deadline.localeCompare(b.deadline)), [tasks]);

    return <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Done</TableCell>
                    <TableCell>Task</TableCell>
                    <TableCell>Deadline</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sorted.map(todo => <TodoRow key={todo.id} task={todo} remove={() => removeById(todo.id)} />)}
            </TableBody>
        </Table>
    </TableContainer>
}
