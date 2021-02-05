export function UpdateMessages(messages) {
    return {
        type: "UPDATE_MESSAGES",
        payload: messages
    }
}

export default function updateMessagesReducer(messages = {
    id: 0,
    name: "",
    date: "",
    message: ""
}, action) {
    switch(action.type) {
        case "UPDATE_MESSAGES":
            return {
                ...messages,
                ...action.payload
            }
        default:
            return messages
    }
}