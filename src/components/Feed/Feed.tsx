import React from "react";
import { useSelector } from "react-redux";
import StoreState from "../../reducers/types";
import FeedCard from "./FeedCard";

const Feed = () => {
  const selectQuacksData = (state: StoreState) => state.quacks[0];
  const quacksData = useSelector(selectQuacksData);
  return (
    <section className="feed">
      <ul className="feed__listings">
        {quacksData &&
          quacksData.data &&
          quacksData.data.map((quack, idx) => (
            <FeedCard id={quack.id + idx} text={quack.text} />
          ))}
      </ul>
    </section>
  );
};

export default Feed;
