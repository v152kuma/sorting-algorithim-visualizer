import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import React from 'react';
function App() {
  return (
    <React.Fragment>
    <Header />
    <Form />
    <input style = {{display: "none"}} id = "isSorted"  value =  "0" />
    </React.Fragment>
  );
}

export default App;
