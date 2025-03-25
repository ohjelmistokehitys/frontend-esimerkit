import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TodoRow from './TodoRow';

export default function TodoTable({ tasks, removeById }) {
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
                {tasks.map(todo => <TodoRow key={todo.id} task={todo} remove={() => removeById(todo.id)} />)}
            </TableBody>
        </Table>
    </TableContainer>
}
