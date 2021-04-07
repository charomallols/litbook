import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Books from './Books';
import Details from './Details/Details';
import NotFound from './NotFound';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
        <Route exact path='/' component={Books} />
        <Route exact path='/not-found' component={NotFound} />
        <Route exact path='/:bookId' component={Details} />
        </Switch>
      </div>
      </Router>
    );
  }
}



export default App;