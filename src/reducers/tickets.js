export function AddTickets(ticket = 1) {
    return {
        type: "ADD_TICKETS",
        payload: ticket,
    }
}

export default function ticketsReducer(ticket = 13, action) {
    switch(action.type) {
        case "ADD_TICKETS":
            return ticket + action.payload
        default: 
            return ticket
    }
}