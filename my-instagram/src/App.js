import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { BrowserRouter,Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
