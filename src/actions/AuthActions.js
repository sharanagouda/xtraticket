import {AUTH_CREATE_USER,
    AUTH_CREATE_USER_FAIL,
    ATUHT_CREATE_USER_SUCCESS,
    AUTH_LOGIN_USER,
    AUTH_LOGIN_USER_FAIL,
    AUTH_LOGIN_USER_SUCCESS} from "../actionTypes";
import firebase from "firebase";
import {Actions} from "react-native-router-flux";

export const createUser = (email, password)=>{
return dispatch =>{
    dispatch({type: AUTH_CREATE_USER});

    const tmpString = email.split('@');
    const username = tmpString[0];

    //  var str = "sharanu.mdl@gmail.com";
    //   var res = str.split("@");
    //   const username = res[0] 
    //  username will be sharanu.mdl

firebase
.auth()
.createUserWithEmailAndPassword(email,password)
.then(user=> createUserSuccess(dispatch,user))
.then(()=>{
    const {currentUser} = firebase.auth();
    try{
        firebase.database().ref(`/users/${currentUser.uid}/`).set({
            profile:{
                name_profile : username,
                email,
                password,
                userpic:'https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png',
                post_number:0,
                fallowers:0,
                fallowing:0,
                bio:null,
                sex:null
            }
        })
    }catch(error){
        alert(error)
    }
}).catch(()=> createUserFail(dispatch));
};
};

const createUserFail = dispatch =>{
dispatch({type: AUTH_CREATE_USER_FAIL});
};

const createUserSuccess = (dispatch,user)=>{
dispatch({
    type:ATUHT_CREATE_USER_SUCCESS,
    payload:user
});

Actions.app();
};

export const loginUser = (email,password)=>{
return dispatch =>{
    dispatch({type:AUTH_LOGIN_USER });

    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(user=>loginUserSuccess(dispatch,user))
    .catch(()=>loginUserFail(dispatch));
};
};

const loginUserFail = dispatch =>{
dispatch({type:AUTH_LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch,user)=>{
dispatch({
    type:AUTH_LOGIN_USER_SUCCESS,
    payload:user
});

Actions.app();
};

