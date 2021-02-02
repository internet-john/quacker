import React, { useRef, useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosClose } from "react-icons/io";
import { BsPerson, BsLightning, BsLightningFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { MdBookmarkBorder } from "react-icons/md";
import { HiOutlineChat } from "react-icons/hi";

import Avatar from "../../assets/profile__avatar.png";
import StoreState from "../../reducers/types";
import { toggleAppNav } from "../../actions";

type NavProps = {
  navType: string;
};

type RouteObject = {
  path: string;
};

/*
    TODO:

    Add component views to route objects below.

    main property replaces feed view on home 

    e.g. clicking notifications replaces feed and shows list of notification cards. 
        (likes, follows, rt's etc)

    Dispatch route to store. Read route in Feed component and render accordingly
**/

const routes: Array<RouteObject> = [
  {
    path: "/",
  },
  {
    path: "/explore",
  },
  {
    path: "/notifications",
  },
  {
    path: "/messages",
  },
  {
    path: "/bookmarks",
  },
  {
    path: "/lists",
  },
  {
    path: "/profile",
  },
  {
    path: "/more",
  },
];

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
        <Router>
          <div className="user">
            <Link className="user__block" to="/profile">
              <>
                <img
                  src={Avatar}
                  alt="profile__avatar"
                  className="profile__avatar"
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
                <div className="metric--following">
                  <div className="metric--following__count">196</div> Following
                </div>
              </Link>
              <Link to="/followers">
                <div className="metric--followers">
                  <div className="metric--follower__count">29831</div>
                  Followers
                </div>
              </Link>
            </div>
          </div>
          <ul className="nav__links">
            <li className="link">
              <Link to="/profile">
                <BsPerson />
                Profile
              </Link>
            </li>
            <li className="link">
              <Link to="/lists">
                <CgNotes />
                Lists
              </Link>
            </li>
            <li className="link">
              <Link to="/topics">
                <HiOutlineChat />
                Topics
              </Link>
            </li>
            <li className="link">
              <Link to="/bookmarks">
                <MdBookmarkBorder />
                Bookmarks
              </Link>
            </li>
            <li className="link">
              <Link to="/moments">
                <BsLightning />
                Moments
              </Link>
            </li>
          </ul>
          <hr />
          <div className="settings">
            <Link to="/settings">Settings and privacy</Link>
          </div>
          <div className="help">
            <Link to="/help">Help Center</Link>
          </div>
          <Switch>
            {routes.map((route, index: number) => (
              <Route key={index} path={route.path} exact={true} />
            ))}
          </Switch>
        </Router>
      </nav>
    </aside>
  ) : null;
};

export default AppNav;
