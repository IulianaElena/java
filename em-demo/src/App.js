import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link, 
  Switch, 
  Route
} from 'react-router-dom';
import { Home } from './Pages/Home/Home';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Dragos',
      surname: 'Iordache',
      newName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      newName: evt.target.value
    });
  }

  handleSubmit(evt) {
    this.setState({
      name: this.state.newName,
      newName: ''
    });

    evt.preventDefault();
  }

  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>              
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <hr></hr>
  
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
            <Home name={this.state.name}>Martor</Home>
            <form onSubmit={this.handleSubmit}>
              <input placeholder="Nume"
                name="newName"
                value={this.state.newName}
                onChange={this.handleChange}
              ></input>
            </form>
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}
