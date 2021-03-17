import React from "react";
import { useSelector } from "react-redux";
import StoreState from "../../../reducers/types";
import FeedCard from "./FeedCard";

const Feed = () => {
  const selectQuacksData = (state: StoreState) => state.quacks;
  const quacksData = useSelector(selectQuacksData);
  return (
    <section className="feed">
      <ul className="feed__listings">
        {quacksData &&
          quacksData.length &&
          quacksData.map((quack, idx) => (
            <FeedCard
              id={quack.id + idx}
              key={quack.id + idx}
              text={quack.text}
              authorMeta={quack.authorMeta}
            />
          ))}
      </ul>
    </section>
  );
};

export default Feed;
