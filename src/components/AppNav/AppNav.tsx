import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

type NavProps = {
    navType: string
}

type RouteObject = {
    path: string,
}

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
const leftNav = <aside><ul className="AppNav__list">
    <Router>
        <li><Link to="/">🦆</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/message">Message</Link></li>
        <li><Link to="/bookmarks">Bookmarks</Link></li>
        <li><Link to="/lists">Lists</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/more">More</Link></li>
        <Switch>
            {routes.map((route, index: number) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={true} 
                    />
            ))}

        </Switch>
    </Router>
    <button>Quack</button>
</ul></aside>

const rightNav = <aside>
    <input type="search" className="global__search" placeholder="Search quacker" />

    <ul className="appNav__content">
        <header>What&apos;s happening</header>
        <li>Trending story</li>
        <li>Trending story</li>
        <li>Trending story</li>
        <li>Trending story</li>
        <li>Trending story</li>
        <button>Show more</button>
    </ul>
    <ul className="appNav__content">
        <header>Who to follow</header>
        <li>Account 1 <button>Follow</button></li>
        <li>Account 2 <button>Follow</button></li>
        <li>Account 3<button>Follow</button> </li>
        <button>Show more</button>
    </ul>
</aside>

const AppNav = ({ navType }: NavProps) => navType === 'routes' ? leftNav : rightNav

export default AppNav;