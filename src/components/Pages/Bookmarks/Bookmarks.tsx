import React from "react";
import { useSelector } from "react-redux";
import StoreState from "../../../reducers/types";
import FeedCard from "../Feed/FeedCard";

const Bookmarks = () => {
  const selectQuacksData = (state: StoreState) => state.quacks[0];
  const quacksData = useSelector(selectQuacksData);
  return (
    <section className="feed">
      <ul className="feed__listings">
        {quacksData &&
          quacksData.data &&
          quacksData.data.map((quack, idx) => (
            <FeedCard
              key={idx}
              id={quack.id + idx}
              text={quack.text}
              authorMeta={quack.authorMeta}
            />
          ))}
      </ul>
    </section>
  );
};

export default Bookmarks;
