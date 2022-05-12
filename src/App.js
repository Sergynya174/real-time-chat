import React, {useContext} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Chat from './components/Chat';
import Loader from './components/Loader';
import AppRouter from "./components/AppRouter";
import {useAuthState} from 'react-firebase-hooks/auth';
import {Context} from './index';

const App = () => {

  const {auth} = useContext(Context);
  const [loading] = useAuthState(auth);

  if(loading) {
    return <Loader/>
  }

  return (
    <BrowserRouter>
      <Navbar/>
      <Login/>
      <Chat/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;