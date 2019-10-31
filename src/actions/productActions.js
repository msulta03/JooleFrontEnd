import prodReducer from '../reducers/productsReducer';
import * as actions from './ActionTypes';
import {tryThis} from '../tools' 

import axios from 'axios';


// TODO: how to get controller to filter results on backend through query


//
export const getAllProducts = (url, testerFunc = tryThis) => dispatch => {
    //fetch Start
    dispatch({type: actions.PRODUCT_FETCH_START});
    
    axios.get(url)
    .then(response =>{
        console.log('products works redux edition');
        testerFunc();

        dispatch({
            type: actions.GET_ALL_PRODUCTS,
            payload: response.data
        })
    }).catch(error => {
        console.log('shit dont work redux edition' + error);
        dispatch({type: actions.PRODUCT_FETCH_FAIL})
    })
}