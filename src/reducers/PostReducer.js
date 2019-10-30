import * as actions from '../actions/ActionTypes';
import {updateObject} from '../tools';

const initState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    priv: null, 
    authRedirectPath: '/'
}
// actions
const authStart = (state, action) => {
    return updateObject(state, {error: null, loading: true})
}

const authSucess = (state, action) => {
    return updateObject(state, {token: action.token, userId: action.username, priv: action.authorities, loading:false,  })
}

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
};


const authReducer = (state = initState, action) => {
    switch (action.type){
        case actions.AUTH_START: return authStart(state, action);
        case actions.AUTH_SUCCESS: return authSucess(state, action);
        case actions.AUTH_FAIL: return authFail(state, action);
        case actions.AUTH_LOGOUT: return authLogout(state, action);
        case actions.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default authReducer;