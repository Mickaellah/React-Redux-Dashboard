import state from "../state"

export function UpdateMessages(state) {
    return {
        type: "UPDATE_MESSAGES",
        payload: state.messages
    }
}

export default function updateMessagesReducer(messages = [...state.messages], action) {
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