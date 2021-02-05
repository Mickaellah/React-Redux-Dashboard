const redux = require('redux');
import state from './state';
import reducers from './reducers/index';

const {createStore} = redux;

const store = createStore(reducers);

export default store;