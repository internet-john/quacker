import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { VscMail, VscBell } from "react-icons/vsc";
import Drawer from "../Drawer";

const NavFooter = () => (
  <>
    <div className="navfooter">
      <NavLink exact to="/" activeStyle={{ color: "#eeee00" }}>
        <AiFillHome />
      </NavLink>
      <NavLink to="/search" activeStyle={{ color: "#eeee00" }}>
        <IoMdSearch />
      </NavLink>
      <NavLink to="/notifications" activeStyle={{ color: "#eeee00" }}>
        <VscBell />
      </NavLink>
      <NavLink to="/messages" activeStyle={{ color: "#eeee00" }}>
        <VscMail />
      </NavLink>
    </div>
    <Drawer />
  </>
);

export default NavFooter;
