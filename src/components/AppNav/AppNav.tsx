import React, { useRef, useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosClose } from "react-icons/io";
import { BsPerson, BsLightning, BsLightningFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { MdBookmarkBorder } from "react-icons/md";
import { HiOutlineChat } from "react-icons/hi";

import Avatar from "../../assets/profile__avatar.png";
import StoreState from "../../reducers/types";
import { toggleAppNav } from "../../actions";

const AppNav = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const selectIsAppNavVisible = (state: StoreState) => state.isAppNavVisible;
  // const selectDrawerOriginContext = (state: StoreState) => state.drawerOriginContext;
  const isAppNavVisible = useSelector(selectIsAppNavVisible);

  /**
   *
   * TODO:
   *  Target state is to close nav on click outside of nav element.
   *  Once complete, bring back button accounts
   *
   */
  const handleClickCloseNav: (evt: Event) => void = function (evt: Event) {
    evt.preventDefault();
    dispatch(toggleAppNav());
  };

  return isAppNavVisible ? (
    <aside className="appnav">
      <nav className="appnav__content">
        <div className="user">
          <Link className="user__block" to="/profile">
            <>
              <img
                src={Avatar}
                alt="profile__avatar"
                className="appnav__avatar"
              />
              {/* <div className="button--accounts" /> */}
              <IoIosClose
                className="button--closenav"
                onClick={handleClickCloseNav}
              />
            </>
            <div className="user__name">spongebob</div>
            <div className="user__username">@krabbypaddydaddy</div>
          </Link>
          <div className="user__metrics">
            <Link to="/following">
              <div className="metric--following" onClick={handleClickCloseNav}>
                <div className="metric--following__count">196</div> Following
              </div>
            </Link>
            <Link to="/followers">
              <div className="metric--followers" onClick={handleClickCloseNav}>
                <div className="metric--follower__count">29831</div>
                Followers
              </div>
            </Link>
          </div>
        </div>
        <ul className="nav__links">
          <li className="link" onClick={handleClickCloseNav}>
            <Link to="/profile">
              <BsPerson />
              Profile
            </Link>
          </li>
          <li className="link" onClick={handleClickCloseNav}>
            <Link to="/lists">
              <CgNotes />
              Lists
            </Link>
          </li>
          <li className="link" onClick={handleClickCloseNav}>
            <Link to="/topics">
              <HiOutlineChat />
              Topics
            </Link>
          </li>
          <li className="link" onClick={handleClickCloseNav}>
            <Link to="/bookmarks">
              <MdBookmarkBorder />
              Bookmarks
            </Link>
          </li>
          <li className="link" onClick={handleClickCloseNav}>
            <Link to="/moments">
              <BsLightning />
              Moments
            </Link>
          </li>
        </ul>
        <hr />
        <div className="settings" onClick={handleClickCloseNav}>
          <Link to="/settings">Settings and privacy</Link>
        </div>
        <div className="help" onClick={handleClickCloseNav}>
          <Link to="/help">Help Center</Link>
        </div>
      </nav>
    </aside>
  ) : null;
};

export default AppNav;
