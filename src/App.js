import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Fragment } from 'react';
import Player from 'react-soundcloud-player'
import Home from './components/Home/Home';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      <Player
        client_id="c5a171200f3a0a73a523bba14a1e0a29"
        audio_id="npm install react-router-dom"
        title="Easyfun - Fanta"
      />
    </Fragment>
  );
}

export default App;
