export function AddNewOrders(newOrders = 1) {
    return {
        type: "ADD_NEW_ORDERS",
        payload: newOrders,
    }
}

export default function newOrdersReducer(newOrders = 124, action) {
    switch(action.type) {
        case "ADD_NEW_ORDERS":
            return newOrders + action.payload
        default: 
            return newOrders
    }
}