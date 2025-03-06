import TodoRow from './TodoRow';

export default function TodoTable({ tasks, removeById }) {
    return <table>
        <thead>
            <tr>
                <th>Done</th>
                <th>Task</th>
                <th>Deadline</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody aria-live="polite">
            {tasks.map(todo => <TodoRow key={todo.id} task={todo} remove={() => removeById(todo.id)} />)}
        </tbody>
    </table>
}
