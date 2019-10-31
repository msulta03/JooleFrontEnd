
import {combineReducers} from 'redux';
import authReducer from './PostReducer';
import prodReducer from './productsReducer';



export default combineReducers(
    {
    auth: authReducer,
    products: prodReducer
    }
);
