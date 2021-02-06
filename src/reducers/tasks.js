import state from "../state"

export function UpdateTasks(state) {
    return {
        type: "UPDATE_TASKS",
        payload: state.tasks
    }
}

export default function updateTasksReducer(tasks = [...state.tasks], action) {
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