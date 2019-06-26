
import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyClDtv9JU3bM0Isw2S5BvbpmB_Ok2ZIq08",
    authDomain: "xtraticket-2cd36.firebaseapp.com",
    databaseURL: "https://xtraticket-2cd36.firebaseio.com",
    projectId: "xtraticket-2cd36",
    storageBucket: "",
    messagingSenderId: "785388275162",
    appId: "1:785388275162:web:72f390ee7f118e61"
};
let app = Firebase.initializeApp(config);
export const db = app.database();