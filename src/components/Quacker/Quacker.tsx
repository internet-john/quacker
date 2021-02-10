import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "../Header";
import AppNav from "../AppNav";
import {
  Bookmarks,
  Following,
  Followers,
  Feed,
  Help,
  Lists,
  Messages,
  Moments,
  NoMatch,
  Notifications,
  Profile,
  Search,
  Settings,
  Topics,
} from "../Pages";
import NavFooter from "../NavFooter";
import "./index.css";

import { fetchQuacks } from "../../actions";

const Quacker = () => {
  const dispatch: Dispatch<any> = useDispatch();

  dispatch(fetchQuacks());

  return (
    <div className="quacker">
      <Router>
        <Header />
        <AppNav />
        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/lists">
            <Lists />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/moments">
            <Moments />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/following">
            <Following />
          </Route>
          <Route path="/followers">
            <Followers />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <NavFooter />
      </Router>
    </div>
  );
};

export default Quacker;
