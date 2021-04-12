import { useState } from "react";

import { MdInsertComment } from "../../../assets/icons";

const topics = [
  { title: "Krabby Patties", subtitle: "Tips, tricks, techniques" },
];

const suggestedTopics = [
  { title: "Chum Bucket", subtitle: "All things Chum Bucket." },
];

const renderTopics = () =>
  topics.map(({ title, subtitle }) => (
    <li className="topic__container">
      <MdInsertComment className="topic__icon" />
      <div className="topic">
        <div className="topic__title">{title}</div>
        <div className="topic__subtitle">{subtitle}</div>
      </div>
      <button className="button--follow">Following</button>
    </li>
  ));

const renderSuggestedTopics = () =>
  suggestedTopics.map(({ title, subtitle }) => (
    <li className="topic__container">
      <MdInsertComment className="topic__icon" />
      <div className="topic">
        <div className="topic__title">{title}</div>
        <div className="topic__subtitle">{subtitle}</div>
      </div>
      <button className="button--follow">Following</button>
    </li>
  ));

const Topics = () => {
  const [focusedTab, setFocusedTab] = useState("following");

  const handleClickTab: (event: EventTarget) => EventTarget = function (
    event: EventTarget
  ) {
    event.preventDefault();

    setFocusedTab(event.target.id);
  };

  return (
    <div className="topics__pg">
      <nav className="topics__tabs">
        <div
          id="following"
          className={
            focusedTab === "following" ? "topics__tab--focused" : "topics__tab"
          }
          onClick={handleClickTab}
        >
          Following
        </div>
        <div
          id="notinterested"
          className={
            focusedTab === "notinterested"
              ? "topics__tab--focused"
              : "topics__tab"
          }
          onClick={handleClickTab}
        >
          Not interested
        </div>
      </nav>
      <div className="topics__about">
        The Topics you follow are used to personalize the Quacks, events, and
        ads that you see, and show up publicly on your profile
      </div>
      <section className="topics">
        <ul className="topics__list">{renderTopics()}</ul>
      </section>
      <section className="topics--suggested">
        <header className="topics--suggested__header">
          Suggested Topics
          <div className="topics--suggested__about">
            You'll see top Tweets about these right in your Home timeline
          </div>
        </header>

        <ul className="topics__list--suggested">{renderSuggestedTopics()}</ul>
      </section>
    </div>
  );
};

export default Topics;
