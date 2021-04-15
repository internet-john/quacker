import React from "react";
import { useSelector } from "react-redux";

import StoreState from "../../reducers/types";
import { AuthorMeta, QuackDataType } from "../../types";

const StoryCarousel = () => {
  const selectQuacks = (state: StoreState) => state.quacks;
  const quacks = useSelector(selectQuacks);

  const renderNewPost = ({ avatar, username }: AuthorMeta) => (
    <div className="storypost" key={username}>
      <img
        loading={"lazy"}
        className="storypost--new"
        src={avatar}
        alt="storycarousel__user--avatar"
        width="200"
        height="200"
      />
      {`${username.slice(1, 6)}...`}
    </div>
  );

  const renderViewedPost = ({ avatar, username }: AuthorMeta) => (
    <div className="storypost" key={username}>
      <img
        loading={"lazy"}
        className="storypost--viewed"
        src={avatar}
        alt="storycarousel__user--avatar"
      />
      {`${username.slice(1, 6)}...`}
    </div>
  );

  /*  

      TODO:
    
    
      move author meta fetch 
      and 
      merging author meta into tweets
      to
      quacker-service
    
*/

  return (
    <div className="storycarousel">
      {quacks && quacks.length
        ? quacks.map((quack: QuackDataType, idx: number) =>
            idx % 3 === 0
              ? renderNewPost(quack.authorMeta)
              : renderViewedPost(quack.authorMeta)
          )
        : null}
    </div>
  );
};

export default StoryCarousel;
