import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAi59TPS3e3vnNb3rQkkWGnXS-yRUXn_xQ",
  authDomain: "real-time-chat-1f29a.firebaseapp.com",
  projectId: "real-time-chat-1f29a",
  storageBucket: "real-time-chat-1f29a.appspot.com",
  messagingSenderId: "646015624448",
  appId: "1:646015624448:web:8cc361268fa581c6a23fe5",
  measurementId: "G-M2XD0CJXLL"
};

export const Context = createContext(null)

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const firestore = firebaseApp.firestore()
 
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
reportWebVitals();
