import {createStore} from 'redux';
import reducer from '../reducers/mainReducer';

// we are connecting reducers to store
let store = createStore(reducer);

export default store;