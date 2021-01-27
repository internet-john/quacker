import React from "react";
import { useSelector } from "react-redux";
import StoreState from "../../reducers/types";
import FeedCard from "./FeedCard";

const Feed = () => {
  const quacks = useSelector<StoreState>((state) => state.quacks);
  return (
    <section className="feed">
      <ul className="feed__listings">
        {/* <FeedCard/> */}
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat mas
        </li>
        <li>Sed ut perspiciatis unde omnis ist</li>
        <li>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrib
        </li>
        <li>abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat mas
        </li>
        <li>Sed ut perspiciatis unde omnis ist</li>
        <li>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrib
        </li>
        <li>abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat mas
        </li>
        <li>Sed ut perspiciatis unde omnis ist</li>
        <li>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrib
        </li>
        <li>abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat mas
        </li>
        <li>Sed ut perspiciatis unde omnis ist</li>
        <li>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrib
        </li>
        <li>abc def ghi jkl mno pqrs tuv wxyz ABC DEF GHI JKL MNO </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean ma
        </li>
      </ul>
    </section>
  );
};

export default Feed;
