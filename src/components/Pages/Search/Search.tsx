import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const Search = () => {
  const location = useLocation();
  return (
    <div className="search__pg">
      <nav className="search__categories">
        <NavLink
          className="category__btn"
          exact
          to="/search"
          activeStyle={{ borderBottomColor: "#eeee00" }}
        >
          For you
        </NavLink>
        <NavLink
          className="category__btn"
          to="/search/covid19"
          activeStyle={{ borderBottomColor: "#eeee00" }}
        >
          COVID-19
        </NavLink>
        <NavLink
          className="category__btn"
          to="/search/trending"
          activeStyle={{ borderBottomColor: "#eeee00" }}
        >
          Trending
        </NavLink>
        <NavLink
          className="category__btn"
          to="/search/news"
          activeStyle={{ borderBottomColor: "#eeee00" }}
        >
          News
        </NavLink>
        <NavLink
          className="category__btn"
          to="/search/sports"
          activeStyle={{ borderBottomColor: "#eeee00" }}
        >
          Sports
        </NavLink>
        <NavLink
          className="category__btn"
          to="/search/entertainment"
          activeStyle={{ borderBottomColor: "#eeee00" }}
        >
          Entertainment
        </NavLink>
      </nav>
      <section className="trending">
        <ul className="trending__list">{/*{content}*/}</ul>
      </section>
    </div>
  );
};

export default Search;
