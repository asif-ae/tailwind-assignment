import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Fragment } from 'react';
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
    </Fragment>
  );
}

export default App;
