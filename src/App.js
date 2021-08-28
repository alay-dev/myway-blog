import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./containers/home/homeCont";
import Header from "./containers/header/headerCont";
import Footer from "./components/Footer";
import history from "./history";
import Post from "./containers/post/postCont";
import dashbardCont from "./containers/dashboard/dashbardCont";
import firebaseConfig from "./config/firebaseConfig";
import firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/dashboard" component={dashbardCont} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
