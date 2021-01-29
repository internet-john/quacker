import React from "react";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { IoMdSearch, IoMdMail, IoMdMailUnread } from "react-icons/io";
import { VscMail, VscBell, VscBellDot } from "react-icons/vsc";
import Drawer from "../Drawer";

const NavFooter = () => (
  <>
    <div className="navfooter">
      <AiFillHome />
      <IoMdSearch />
      <VscBell />
      <VscMail />
    </div>
    <Drawer />
  </>
);

export default NavFooter;
