import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './assets/planet.png';
import Navbar from './components/Navbar';
import './App.css';
import Rockets from './components/Rockets';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';
import getRockets from './redux/slices/rocketsSlice';
import store from './redux/configureStore';

function App() {
  getRockets();
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
