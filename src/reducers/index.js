const redux = require('redux');

import newCommentsReducer from './newComments';
import newTasksReducer from './newTasks';
import newOrdersReducer from './newOrders';
import ticketsReducer from './tickets';
import ordersReducer from './orders';
import updateTasksReducer from './tasks';
import updateMessagesReducer, { UpdateMessages } from './messages';

const {combineReducers} = redux;

const rootReducer = combineReducers({
    newComments: newCommentsReducer,
    newTasks: newTasksReducer,
    newOrders: newOrdersReducer,
    tickets: ticketsReducer,
    tasks: updateTasksReducer,
    messages: updateMessagesReducer,
    orders: ordersReducer
})

export default rootReducer;