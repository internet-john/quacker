import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews } from "../../../actions";
import { ActionType } from "../../../actions/types";
import StoreState from "../../../reducers/types";
import { NewsDataType } from "../../../types";
import Feed from "../Feed";

const Search = () => {
  const dispatch: Dispatch<ActionType> = useDispatch();
  const selectNewsArticles = (state: StoreState) => state.news;
  const selectNewsCategory = (state: StoreState) => state.newsCategory;
  const selectUserSearchCategory = (state: StoreState) =>
    state.userSearchCategory;
  const selectIsUserInputSearch = (state: StoreState) =>
    state.isUserInputSearch;

  const [selectedNewsTab, setSelectedNewsTab] = useState("general");
  const [selectedSearchTab, setSelectedSearchTab] = useState("top");

  const news = useSelector(selectNewsArticles);
  const focusedNewsTab = useSelector(selectNewsCategory);
  const focusedSearchTab = useSelector(selectUserSearchCategory);
  const isUserInputSearch = useSelector(selectIsUserInputSearch);

  const handleClickNewsFilter: (event: EventTarget) => EventTarget = function (
    event: EventTarget
  ) {
    event.preventDefault();

    setSelectedNewsTab(event.target.id);
    if (event.target.id !== focusedNewsTab)
      dispatch(fetchNews(event.target.id));
  };

  const handleClickQuacksFilter: (
    event: EventTarget
  ) => EventTarget = function (event: EventTarget) {
    event.preventDefault();

    // setSelectedTab(event.target.id);
    // if (event.target.id !== focusedTab) dispatch(fetchNews(event.target.id));
  };

  const renderTopicFeed = () =>
    news.map((article: NewsDataType, idx: number) => (
      <li
        key={article.publishedAt}
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

  const renderTopicNav = () => (
    <nav className="search__categories">
      <div
        id="general"
        className={
          focusedNewsTab === "general"
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
          focusedNewsTab === "covid19"
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
          focusedNewsTab === "trending"
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
          focusedNewsTab === "technology"
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
          focusedNewsTab === "sports"
            ? "category__tab--focused"
            : "category__tab"
        }
        onClick={handleClickNewsFilter}
      >
        Sports
      </div>
      <div
        id="entertainment"
        className={
          focusedNewsTab === "entertainment"
            ? "category__tab--focused"
            : "category__tab"
        }
        onClick={handleClickNewsFilter}
      >
        Entertainment
      </div>
    </nav>
  );

  const renderUserSearchNav = () => (
    <nav className="search__categories">
      <div
        id="top"
        className={
          focusedSearchTab === "top"
            ? "category__tab--focused"
            : "category__tab"
        }
        onClick={handleClickQuacksFilter}
      >
        Top
      </div>
      <div
        id="latest"
        className={
          focusedSearchTab === "latest"
            ? "category__tab--focused"
            : "category__tab"
        }
        onClick={handleClickQuacksFilter}
      >
        Latest
      </div>
      <div
        id="people"
        className={
          focusedSearchTab === "people"
            ? "category__tab--focused"
            : "category__tab"
        }
        onClick={handleClickQuacksFilter}
      >
        People
      </div>
      <div
        id="photos"
        className={
          focusedSearchTab === "photos"
            ? "category__tab--focused"
            : "category__tab"
        }
        onClick={handleClickQuacksFilter}
      >
        Photos
      </div>
      <div
        id="videos"
        className={
          focusedSearchTab === "videos"
            ? "category__tab--focused"
            : "category__tab"
        }
        onClick={handleClickQuacksFilter}
      >
        Videos
      </div>
    </nav>
  );

  const renderSearchFeed = () => <Feed />;

  const renderUserSearchView = () => (
    <>
      {renderUserSearchNav()}
      <section className="feed">
        <ul className="feed__content">{renderSearchFeed()}</ul>
      </section>
    </>
  );

  const renderDefaultView = () => (
    <>
      {renderTopicNav()}
      <section className="feed">
        <ul className="feed__content">{renderTopicFeed()}</ul>
      </section>
    </>
  );

  return (
    <div className="search__pg">
      {isUserInputSearch ? renderUserSearchView() : renderDefaultView()}
    </div>
  );
};

export default Search;
