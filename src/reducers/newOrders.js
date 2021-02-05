export function AddNewOrders(order = 1) {
    return {
        type: "ADD_NEW_ORDERS",
        payload: order,
    }
}

export default function newOrdersReducer(order = 124, action) {
    switch(action.type) {
        case "ADD_NEW_ORDERS":
            return order + action.payload
        default: 
            return order
    }
}