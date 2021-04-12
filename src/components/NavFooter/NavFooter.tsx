import { NavLink } from "react-router-dom";
import { AiFillHome, IoMdSearch, VscBell, VscMail } from "../../assets/icons";

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
