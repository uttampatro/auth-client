import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Dashboard from "./pages/Dashboard/Dashboard"

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
          <Route path="/dashboard">
            <Dashboard />
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
