import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import UserContainer from './components/Header/UserContainer/UserContainer';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <UserContainer></UserContainer>
    </div>
  );
}

export default App;
