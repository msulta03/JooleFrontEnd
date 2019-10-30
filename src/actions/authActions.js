import authReducer from '../reducers/PostReducer';
import * as actions from './ActionTypes';

import axios from 'axios';


export const loginUser = (loginCred, url, tempVal) => dispatch =>{

    //auth start
    dispatch({
        type: actions.AUTH_START,
    })
    const payload = JSON.stringify(loginCred);

    axios.post(url, loginCred)
    .then(response => {
        //auth successs
        console.log('login works redux edition');
        console.log(response);
        tempVal();

        dispatch({
            type: actions.AUTH_SUCCESS,
            token: response.data.accessToken,
            username: response.data.username,
            authorities: response.data.authorities,

        })

        
    }).catch ( error => {
        console.log('shit dont work redux edition');
        dispatch ({
            type: actions.AUTH_FAIL,
        })
     }
    )
}

