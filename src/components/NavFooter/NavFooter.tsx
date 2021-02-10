import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { IoMdSearch, IoMdMail, IoMdMailUnread } from "react-icons/io";
import { VscMail, VscBell, VscBellDot } from "react-icons/vsc";
import Drawer from "../Drawer";

const NavFooter = () => (
  <>
    <div className="navfooter">
      <div className="link">
        <Link to="/">
          <AiFillHome />
        </Link>
      </div>
      <div className="link">
        <Link to="/search">
          <IoMdSearch />
        </Link>
      </div>
      <div className="link">
        <Link to="/notifications">
          <VscBell />
        </Link>
      </div>
      <div className="link">
        <Link to="/messages">
          <VscMail />
        </Link>
      </div>
    </div>
    <Drawer />
  </>
);

export default NavFooter;
