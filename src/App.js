import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import { Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";
import SignupAdmin from "./Containers/SignupAdmin";
import ProductList from "./Containers/ProductList";
import Product from "./Containers/Product";


class App extends Component {
  render() {
    const isLoggedIn = () => false;
    return (
      <div>
        <div>
          <Link to="/">home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
        <div>
          <Switch>
          <Route path="/product/:id/:name" render={(routerProps) => {
                if(isLoggedIn()) {
                  return <Product {...routerProps} />;
                } else {
                  <Redirect to="/login" />
                }
                
              }} />
            <Route path="/product" render={(routerProps) => {
                if(isLoggedIn()) {
                  return <Product {...routerProps} />;
                } else {
                  <Redirect  to="/login" />
                }
              }} />
            <Route
              path="/login"
              render={(routerProps) => {
                return <Login {...routerProps} />;
              }}
            />
            <Route
              path="/signup/admin"
              render={(routerProps) => {
                return <SignupAdmin {...routerProps} />;
              }}
            />
            <Route
              path="/signup"
              render={(routerProps) => {
                return <Signup {...routerProps} />;
              }}
            />
            <Route
              path="/"
              render={(routerProps) => {
                return <Home {...routerProps} />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
