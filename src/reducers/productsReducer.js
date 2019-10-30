import * as actions from '../actions/ActionTypes';
import {updateObject} from '../tools';

const initState = {
    loading: false,
    products: [],
    error: null,
}


//actions

const loadProducts = (state, action) => {
    return updateObject(state, {loading: true});
}

const loadSuccess = (state, action) => {
    return updateObject(state, {loading: false, error: false, products: action.payload});
}

const loadFail = (state, action) => {
    return updateObject(state, {loading:false, error:true});
}

const loadProductsByID = (state, action) => {
    return updateObject(state, {products: action.payload});
}

const loadProductsByCat = (state, action) => {
    return updateObject(state, {products: action.payload});
}

const prodReducer = (state = initState, action) => {
    switch(action.type){
        case actions.PRODUCT_FETCH_START: return loadProducts(state,action);
        case actions.PRODUCT_FETCH_FAIL: return loadFail(state,action);
        case actions.GET_ALL_PRODUCTS: return loadSuccess(state,action);
        case actions.GET_PRODUCT_BY_ID: return loadProductsByID(state,action);
        case actions.GET_PRODUCT_BY_CATEGORY: return loadProductsByCat(state,action);
    }
}

export default prodReducer;
