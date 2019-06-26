import React from 'react';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import firebase from 'firebase';
import Main from "./src/Main";
import storePersist from "./src/config/Store";

const persist = storePersist();

export default class App extends React.Component {

  componentWillMount() {
    const config = {
    apiKey: "AIzaSyClDtv9JU3bM0Isw2S5BvbpmB_Ok2ZIq08",
    authDomain: "xtraticket-2cd36.firebaseapp.com",
    databaseURL: "https://xtraticket-2cd36.firebaseio.com",
    projectId: "xtraticket-2cd36",
    storageBucket: "",
    messagingSenderId: "785388275162",
    appId: "1:785388275162:web:72f390ee7f118e61"
    };
    firebase.initializeApp(config);
  }


  render() {
    return (
      <Provider store={persist}>
           <PersistGate loading={null} persistor={persist}>
              <Main />
          </PersistGate>
      </Provider>
    );
  }
};