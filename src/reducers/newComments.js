export function AddNewComments(comment = 1) {
    return {
        type: "ADD_NEW_COMMENTS",
        payload: comment,
    }
}

export default function newCommentsReducer(comment = 23, action) {
    switch(action.type) {
        case "ADD_NEW_COMMENTS":
            return comment + action.payload
        default: 
            return comment
    }
}