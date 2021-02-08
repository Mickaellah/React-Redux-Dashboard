export function AddNewTasks(task = 1) {
    return {
        type: "ADD_NEW_TASKS",
        payload: task,
    }
}

export default function newTasksReducer(task = 0, action) {
    switch(action.type) {
        case "ADD_NEW_TASKS":
            return task + action.payload
        default: 
            return task
    }
}