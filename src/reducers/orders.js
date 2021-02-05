export function EditOrders(orders) {
    return {
        type: "UPDATE_ORDERS",
        payload: orders,
    }
}

export default function ordersReducer(orders = {
    id: 0,
    orderDate: "",
    orderTime: "",
    amount: ""
}, action) {
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