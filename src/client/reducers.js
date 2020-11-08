import {combineReducers} from 'redux';
import homeReducer from './redux/index'

export default () => {
    const reducers = {
        ...homeReducer,
    };

    return combineReducers(reducers);
};