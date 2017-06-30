import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Order from './features/Order';
import * as orderActions from './redux/modules/orders';
import * as authActions from './redux/modules/auth';

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
  constructor() {
    super();

    this.state = {
      orders: []
    }
  }

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

    const ordersRef = firebase.database().ref('orders');

    ordersRef.on('value', (snapshot) => {
      this.props.loadOrders(snapshot.val());
    });

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().getRedirectResult().then(result => {
      const user = result.user;

      if (!user) {
        const persistedUser = JSON.parse(localStorage.getItem('user'));

        if (!persistedUser) {
          firebase.auth().signInWithRedirect(provider);
        } else {
          this.props.logIn(persistedUser);
        }
      } else {
        localStorage.setItem('user', JSON.stringify(user));
        this.props.logIn(user);
      }
    }).catch(function (error) {
      console.dir(error);
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

const mapDispatchToProps = dispatch => ({
  loadOrders: orders => dispatch(orderActions.load(orders)),
  logIn: user => dispatch(authActions.logIn(user))
});

export default connect(null, mapDispatchToProps)(App);
