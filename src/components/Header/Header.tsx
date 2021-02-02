import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { GiHamburgerMenu, GiPlasticDuck } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi";

import StoryCarousel from "../../StoryCarousel";
import { toggleAppNav } from "../../actions";

const Header = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const handleClickToggleAppNav = () => dispatch(toggleAppNav());

  return (
    <header className="header">
      <div className="header__nav">
        <GiHamburgerMenu onClick={handleClickToggleAppNav} />
        <GiPlasticDuck />
        <HiOutlineSparkles />
      </div>
      <StoryCarousel />
    </header>
  );
};

export default Header;
