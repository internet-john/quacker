import React from "react";
import { useSelector } from "react-redux";
import StoreState from "../../../reducers/types";
import FeedCard from "./FeedCard";

const LoadingComponent = () => (
  <div className="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

const Feed = () => {
  const selectQuacksData = (state: StoreState) => state.quacks;
  const quacksData = useSelector(selectQuacksData);
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
