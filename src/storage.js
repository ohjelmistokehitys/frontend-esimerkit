import dayjs from "dayjs";

const initialData = [
    { description: "hello world", deadline: dayjs().add(1, 'days').format("YYYY-MM-DD"), id: 1 },
    { description: "terve maailma", deadline: dayjs().add(7, 'days').format("YYYY-MM-DD"), id: 2 }
];


export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasks() {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : initialData;
}