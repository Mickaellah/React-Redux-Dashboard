import state from "../state"

export function EditOrders(state) {
    return {
        type: "UPDATE_ORDERS",
        payload: state.orders,
    }
}

export default function ordersReducer(orders = [...state.orders], action) {
    switch(action.type) {
        case "UPDATE_ORDERS":
            return {
                ...orders,
                ...action.payload
            }
        default: 
            return orders
    }
}