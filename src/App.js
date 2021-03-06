import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "./firebase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";

import Order from "./features/Order";
import Call from "./features/Call";
import Adverbs from "./features/Adverbs";
import * as orderActions from "./redux/modules/orders";
import * as authActions from "./redux/modules/auth";

import "./App.css";

class App extends Component {
  componentDidMount() {
    const ordersRef = firebase.database().ref("orders");

    ordersRef.on("value", snapshot => {
      this.props.loadOrders(snapshot.val());
    });

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        const user = result.user;

        if (!user) {
          const persistedUser = JSON.parse(localStorage.getItem("user"));

          if (!persistedUser) {
            firebase.auth().signInWithRedirect(provider);
          } else {
            this.props.logIn(persistedUser);
          }
        } else {
          localStorage.setItem("user", JSON.stringify(user));
          this.props.logIn(user);
        }
      })
      .catch(function(error) {
        console.dir(error);
      });
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Order</Link>
            </li>
            <li>
              <Link to="/call">Call</Link>
            </li>
            <li>
              <Link to="/adverbs">Adverbs</Link>
            </li>
          </ul>

          <AppBar title="Bili Pivac" showMenuIconButton={false} />

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
