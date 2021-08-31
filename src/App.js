import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './assets/planet.png';
import Navbar from './components/Navbar';
import './App.css';
import Missions from './components/missions/Missions';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/" />
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/profile" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
