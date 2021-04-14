import React from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Register from './Register';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path= "/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>      
      </div>
    </Router>
    
  );
}

export default App;
