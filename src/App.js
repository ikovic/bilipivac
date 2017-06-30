import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Order from './features/Order';

import './App.css';

const Call = () => (
  <div>
    <h2>Call</h2>
  </div>
);

const Adverbs = () => (
  <div>
    <h2>Adverbs</h2>
  </div>
);


class App extends Component {

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyB-00Z6-M47FA2gTsT_QS0QyNbWMOhL1cQ",
      authDomain: "bilipivac-f2b81.firebaseapp.com",
      databaseURL: "https://bilipivac-f2b81.firebaseio.com",
      projectId: "bilipivac-f2b81",
      storageBucket: "bilipivac-f2b81.appspot.com",
      messagingSenderId: "452297064967"
    };

    firebase.initializeApp(config);

    const userRef = firebase.database().ref('users');

    userRef.on('value', function (snapshot) {
      console.log(snapshot.val());
    });
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Order</Link></li>
            <li><Link to="/call">Call</Link></li>
            <li><Link to="/adverbs">Adverbs</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={Order} />
          <Route path="/call" component={Call} />
          <Route path="/adverbs" component={Adverbs} />
        </div>
      </Router>
    );
  }
}

export default App;
