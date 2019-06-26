import {
    AUTH_CREATE_USER,
    AUTH_CREATE_USER_FAIL,
    AUTH_CREATE_USER_SUCCESS,
    AUTH_LOGIN_USER,
    AUTH_LOGIN_USER_FAIL,
    AUTH_LOGIN_USER_SUCCESS
    } from "../actionTypes";
    
    const initialState = { 
        errorLoging:'',
        errorCreating:'',
        loading:false,
        user:null,
        loggedIn: true
    }
    
    const auth = (state = initialState, action) => {
        switch(action.type) {
            case AUTH_CREATE_USER:
                return {
                    ...state,
                   ...initialState,
                   loading:true,
                   user:action.payload
                }
            case AUTH_CREATE_USER_FAIL:
                return {
                    ...state,
                    errorCreating:"Creation failed! Please Check the Credentials!",
                    loading:false
                }    
            case AUTH_CREATE_USER_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    error:''
                }
            case AUTH_LOGIN_USER:
                return{
                    ...state,
                    ...initialState,
                    loading:true,
                    user:action.payload
                }
            case AUTH_LOGIN_USER_FAIL:
                return{
                    ...state,
                    errorLoging:"Login failed! Please check the credentials!",
                    loading:false  
                }
            case AUTH_LOGIN_USER_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    error:''
                }
            default:
                return state;
        }
    }
    export default auth;