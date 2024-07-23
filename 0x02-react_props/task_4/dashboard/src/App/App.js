import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Login from '../login/Login';
import Notifications from '../Notifications/Notifications';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
