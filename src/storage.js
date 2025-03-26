import dayjs from "dayjs";

// Some initial data for testing purposes
const initialData = [
    { description: "hello world", deadline: dayjs().add(1, 'days').format("YYYY-MM-DD"), id: 1 },
    { description: "terve maailma", deadline: dayjs().add(7, 'days').format("YYYY-MM-DD"), id: 2 }
];


/**
 * Saves given tasks in local storage in JSON format.
 */
export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Loads tasks from local storage. If no tasks are found, returns the hard coded initial data.
 */
export function loadTasks() {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : initialData;
}