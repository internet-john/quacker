import { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import StoreState from "../../../reducers/types";
import FeedCard from "./FeedCard";
import { fetchQuacks } from "../../../actions";

const LoadingComponent = () => (
  <div className="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

/**
 * TODO:
 *
 * SEGMENT TIMELINEFEED AND QUERYFEED
 */

const Feed = () => {
  const dispatch: Dispatch<ActionType> = useDispatch();
  const selectQuacksData = (state: StoreState) => state.quacks;
  const selectPaginationToken = (state: StoreState) => state.quacksNextToken;
  const selectUserInputSearch = (state: StoreState) => state.userInputSearch;

  const location = useLocation();
  const quacksData = useSelector(selectQuacksData);
  const paginationToken = useSelector(selectPaginationToken);
  const userInputSearch = useSelector(selectUserInputSearch);

  const fetchMoreQuacks = () => {
    if (location.pathname === "/") dispatch(fetchQuacks(""));
    else if (location.pathname === "/search")
      dispatch(fetchQuacks(userInputSearch));
  };

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && paginationToken) fetchMoreQuacks();
      });
    },
    {
      threshold: 1.0,
    }
  );

  useEffect(() => {
    const target = document.querySelector(".paginationThreshold");
    if (target) scrollObserver.observe(target);
  }, [quacksData]);
  return (
    <section className="feed">
      <ul className="feed__listings">
        {quacksData && quacksData.length ? (
          quacksData.map((quack, idx) => (
            <FeedCard
              id={quack.id + idx}
              key={quack.id + idx}
              text={quack.text}
              authorMeta={quack.authorMeta}
              addThreshold={idx === quacksData.length - 4}
            />
          ))
        ) : (
          <LoadingComponent />
        )}
      </ul>
    </section>
  );
};

export default Feed;
