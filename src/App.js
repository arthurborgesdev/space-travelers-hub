import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Rockets from './components/Rockets';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';
import logo from './assets/planet.png';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
