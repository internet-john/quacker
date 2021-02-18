import React from "react";
import { useSelector } from "react-redux";

import StoreState from "../../reducers/types";

const StoryCarousel = () => {
  const selectQuacks = (state: StoreState) => state.quacks;
  const quacks = useSelector(selectQuacks);

  const avatars =
    quacks && quacks[0] && quacks[0].data
      ? quacks[0].data.map((quack) => quack.authorMeta.avatar)
      : [];

  const renderNewPost = ({ avatar, username }) => (
    <div className="storypost">
      <img
        className="storypost--new"
        src={avatar}
        alt="storycarousel__user--avatar"
      />
      {`${username.slice(1, 6)}...`}
    </div>
  );

  const renderViewedPost = ({ avatar, username }) => (
    <div className="storypost">
      <img
        className="storypost--viewed"
        src={avatar}
        alt="storycarousel__user--avatar"
      />
      {`${username.slice(1, 6)}...`}
    </div>
  );

  return (
    <div className="storycarousel">
      {quacks && quacks[0] && quacks[0].data
        ? quacks[0].data.map((quack, idx) =>
            idx % 3 === 0
              ? renderNewPost(quack.authorMeta)
              : renderViewedPost(quack.authorMeta)
          )
        : null}
    </div>
  );
};

export default StoryCarousel;
