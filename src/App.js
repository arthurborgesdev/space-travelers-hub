import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './assets/planet.png';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route path="/missions" />
          <Route path="/profile" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
