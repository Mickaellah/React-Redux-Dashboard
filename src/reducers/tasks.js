export function UpdateTasks(tasks) {
    return {
        type: "UPDATE_TASKS",
        payload: tasks
    }
}

export default function updateTasksReducer(tasks = {
    id: 0,
    task: "",
    date: ""
}, action) {
    switch(action.type) {
        case "UPDATE_TASKS":
            return {
                ...tasks,
                ...action.payload
            }
        default:
            return tasks
    }
}