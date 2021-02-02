import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import Header from "../Header";
import AppNav from "../AppNav";
import Feed from "../Feed";
import NavFooter from "../NavFooter";
import "./index.css";

import { fetchQuacks } from "../../actions";

const Quacker = () => {
  const dispatch: Dispatch<any> = useDispatch();

  dispatch(fetchQuacks());

  return (
    <div className="quacker">
      <>
        <Header />
        <AppNav />
      </>
      <Feed />
      <NavFooter />
    </div>
  );
};

export default Quacker;
