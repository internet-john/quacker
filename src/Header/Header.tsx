import React from 'react';
import {GiHamburgerMenu, GiPlasticDuck} from 'react-icons/gi'
import {HiOutlineSparkles} from 'react-icons/hi'

import StoryCarousel from '../StoryCarousel';

const Header = () =>
    <header className="header">
        <div className="header__nav">
        <GiHamburgerMenu />
        <GiPlasticDuck />
        <HiOutlineSparkles /></div>
        <StoryCarousel />

    </header>

export default Header;