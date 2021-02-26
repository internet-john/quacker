import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { GiHamburgerMenu, GiPlasticDuck } from "react-icons/gi";
import { HiOutlineSparkles, HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

import StoryCarousel from "../StoryCarousel";
import { toggleAppNav } from "../../actions";

const determineHeaderIconLeft = (
  pathname: string,
  handleClickIconLeft: Function
) => {
  let icon = (
    <GiHamburgerMenu className="header__icon" onClick={handleClickIconLeft} />
  );
  switch (pathname) {
    case "/profile":
    case "/lists":
    case "/topics":
    case "/bookmarks":
    case "/moments":
    case "/settings":
    case "/help":
      icon = (
        <IoIosArrowBack
          className="header__icon"
          onClick={handleClickIconLeft}
        />
      );
      return icon;
    default:
      return icon;
  }
};

const determineHeaderTitle = (pathname: string) => {
  let title;
  switch (pathname) {
    case "/":
      title = <GiPlasticDuck className="header__icon" />;
      return title;
    case "/search":
      title = (
        <input
          className="header__search"
          type="search"
          placeholder="Search Quacker"
          value=""
        />
      );
      return title;
    case "/notifications":
      title = <div className="header__title">Notifications</div>;
      return title;
    case "/messages":
      title = <div className="header__title">Messages</div>;
      return title;
    case "/lists":
      title = <div className="header__title">Lists</div>;
      return title;
    case "/topics":
      title = <div className="header__title">Topics</div>;
      return title;
    case "/bookmarks":
      title = <div className="header__title">Bookmarks</div>;
      return title;
    case "/moments":
      title = <div className="header__title">Moments</div>;
      return title;
    case "/settings":
      title = <div className="header__title">Settings and privacy</div>;
      return title;
    case "/help":
      title = <div className="header__title">Help center</div>;
      return title;
    default:
      title = <GiPlasticDuck />;
      return title;
  }
};

const determineHeaderIconRight = (pathname: string) => {
  let icon;
  switch (pathname) {
    case "/":
      icon = <HiOutlineSparkles className="header__icon" />;
      return icon;
    case "/search":
    case "/notifications":
    case "/messages":
      icon = <AiOutlineSetting className="header__icon" />;
      return icon;
    case "/lists":
    case "/bookmarks":
      icon = <HiDotsHorizontal className="header__icon" />;
      return icon;
    case "/topics":
    case "/moments":
    case "/settings":
    case "/help":
      icon = <div></div>;
      return icon;
    default:
      icon = <HiOutlineSparkles className="header__icon" />;
      return icon;
  }
};
const Header = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const handleClickIconLeft = () => {
    switch (location.pathname) {
      case "/":
      case "/search":
      case "/notifications":
      case "/messages":
        handleClickToggleAppNav();
        return;
      case "/profile":
      case "/lists":
      case "/topics":
      case "/bookmarks":
      case "/moments":
      case "/settings":
      case "/help":
        handleClickGoBack();
        return;
      default:
        return;
    }
  };

  const handleClickToggleAppNav = () => dispatch(toggleAppNav());

  const handleClickGoBack = () => history.goBack();

  return (
    <header className="header">
      <div className="header__nav">
        {determineHeaderIconLeft(location.pathname, handleClickIconLeft)}
        {location.pathname !== "/profile" &&
          determineHeaderTitle(location.pathname)}
        {location.pathname !== "/profile" &&
          determineHeaderIconRight(location.pathname)}
      </div>
      {location.pathname === "/" ? <StoryCarousel /> : null}
    </header>
  );
};

export default Header;
