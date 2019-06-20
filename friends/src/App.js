import React from 'react';
import './App.css';
import FriendList from './components/FriendsList';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import FriendForm from './components/FriendForm';


function App() {
  return (
    <div className="App">
     <Route exact path='/' component={Home} />
     <Route path='/friend-form' render={ props => <FriendForm {...props}/>} />
     <Route render={ props => <FriendList {...props}/>} />
    </div>
  );
}

export default App;
