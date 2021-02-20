import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import StoreState from "../../../reducers/types";
import { fetchNews } from "../../../actions";

const Search = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const selectNewsArticles = (state: StoreState) => state.news;
  const selectNewsCategory = (state: StoreState) => state.newsCategory;
  const [selectedTab, setSelectedTab] = useState("general");

  const news = useSelector(selectNewsArticles);
  const focusedTab = useSelector(selectNewsCategory);

  const handleClickNewsFilter: (event: EventTarget) => EventTarget = function (
    event: EventTarget
  ) {
    event.preventDefault();

    setSelectedTab(event.target.id);
    if (event.target.id !== focusedTab) dispatch(fetchNews(event.target.id));
  };

  const renderFeed = () =>
    news.map((article, idx) => (
      <li
        className={
          idx === 0 && article.urlToImage ? "article--featured" : "article"
        }
      >
        <a href={article.url}>
          {idx === 0 ? (
            <img className="article--featured__img" src={article.urlToImage} />
          ) : null}
          <div className="article__content">
            <div className="article__publish--meta">
              <div className="publish--source">
                {`${article.source.name} • `}
              </div>
              <div className="publish--timestamp">
                {`${
                  new Date().getHours() -
                  new Date(article.publishedAt).getHours()
                } hours ago`}
              </div>
            </div>
            <div className="article__title">{article.title}</div>
          </div>
        </a>
      </li>
    ));

  return (
    <div className="search__pg">
      <nav className="search__categories">
        <div
          id="general"
          className={
            focusedTab === "general"
              ? "category__tab--focused"
              : "category__tab"
          }
          onClick={handleClickNewsFilter}
        >
          For you
        </div>
        <div
          id="covid19"
          className={
            focusedTab === "covid19"
              ? "category__tab--focused"
              : "category__tab"
          }
          onClick={handleClickNewsFilter}
        >
          COVID-19
        </div>
        <div
          id="trending"
          className={
            focusedTab === "trending"
              ? "category__tab--focused"
              : "category__tab"
          }
          onClick={handleClickNewsFilter}
        >
          Trending
        </div>
        <div
          id="technology"
          className={
            focusedTab === "technology"
              ? "category__tab--focused"
              : "category__tab"
          }
          onClick={handleClickNewsFilter}
        >
          Technology
        </div>
        <div
          id="sports"
          className={
            focusedTab === "sports" ? "category__tab--focused" : "category__tab"
          }
          onClick={handleClickNewsFilter}
        >
          Sports
        </div>
        <div
          id="entertainment"
          className={
            focusedTab === "entertainment"
              ? "category__tab--focused"
              : "category__tab"
          }
          onClick={handleClickNewsFilter}
        >
          Entertainment
        </div>
      </nav>
      <section className="feed">
        <ul className="feed__content">{renderFeed()}</ul>
      </section>
    </div>
  );
};

export default Search;
