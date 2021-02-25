import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { BsChatFill, BsPersonFill, BsLightningFill } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";

const notifications = [
  { ts: 1613366609, author: "Sandy Cheeks", type: "like__quack" },
  { ts: 1613490278, author: "Gary", type: "like__quack" },
  { ts: 1612251746, author: "Squidward Tentacles", type: "reply__quack" },
  { ts: 1612700008, author: "Sandy Cheeks", type: "like__quack" },
  { ts: 1613370052, author: "Patrick Starr", type: "like__reply" },
  { ts: 1613068936, author: "Patrick Starr", type: "requack__quack" },
  { ts: 1612824642, author: "Gary", type: "like__reply" },
  { ts: 1613645240, author: "Sandy Cheeks", type: "like__reply" },
  { ts: 1612361540, author: "Patrick Starr", type: "like__requack" },
  { ts: 1612320803, author: "Patrick Starr", type: "requack__quack" },
  { ts: 1612237726, author: "Gary", type: "reply__requack" },
  { ts: 1613104368, author: "Sandy Cheeks", type: "like__reply" },
  { ts: 1612943757, author: "Patrick Starr", type: "like__quack" },
  { ts: 1612299263, author: "Mrs. Puff", type: "follow" },
  { ts: 1612424076, author: "Patrick Starr", type: "requack__requack" },
  { ts: 1613273497, author: "Gary", type: "like__quack" },
  { ts: 1612579942, author: "Sandy Cheeks", type: "reply__reply" },
  { ts: 1613614094, author: "Patrick Starr", type: "like__requack" },
  { ts: 1613467849, author: "Mr Krabs", type: "like__quack" },
  { ts: 1612533139, author: "Mr Krabs", type: "follow" },
];

const renderNotifications = () =>
  notifications.map(({ ts, author, type }) => {
    if (type === "follow") {
      return (
        <li className="notification--follow" key={ts}>
          <div className="notification__content">
            <BsPersonFill />
            {author} followed you
          </div>
        </li>
      );
    } else if (type === "reply__quack") {
      return (
        <li className="notification--reply" key={ts}>
          <div className="notification__content">
            <BsChatFill />
            {author} replied to your quack
          </div>
        </li>
      );
    } else if (type === "reply__requack") {
      return (
        <li className="notification--reply" key={ts}>
          <div className="notification__content">
            <BsChatFill />
            {author} replied to your Requack
          </div>
        </li>
      );
    } else if (type === "reply__reply") {
      return (
        <li className="notification--reply" key={ts}>
          <div className="notification__content">
            <BsChatFill />
            {author} replied to your reply
          </div>
        </li>
      );
    } else if (type === "like__quack") {
      return (
        <li className="notification--like" key={ts}>
          <div className="notification__content">
            <FcLike /> {author} liked your Quack
          </div>
        </li>
      );
    } else if (type === "like__reply") {
      return (
        <li className="notification--like" key={ts}>
          <div className="notification__content">
            <FcLike />
            {author} liked your reply
          </div>
        </li>
      );
    } else if (type === "like__requack") {
      return (
        <li className="notification--like" key={ts}>
          <div className="notification__content">
            <FcLike /> {author} liked your Requack
          </div>
        </li>
      );
    } else if (type === "requack__quack") {
      return (
        <li className="notification--requack" key={ts}>
          <div className="notification__content">
            <BiRepost /> {author} requacked your quack
          </div>
        </li>
      );
    } else if (type === "requack__reply") {
      return (
        <li className="notification--requack" key={ts}>
          <div className="notification__content">
            <BiRepost /> {author} requacked your reply
          </div>
        </li>
      );
    } else if (type === "requack__requack") {
      return (
        <li className="notification--requack" key={ts}>
          <div className="notification__content">
            <BiRepost /> {author} requacked your quack
          </div>
        </li>
      );
    } else {
      return (
        <li className="notification--general" key={ts}>
          <div className="notification__content">
            <BsLightningFill />
            Alert!
          </div>
        </li>
      );
    }
  });

const handleClickNotificationsTab = (evt: EventTarget) => {
  setFocusedTab(evt.target.value);
};

const Notifications = () => {
  const [focusedTab, setFocusedTab] = useState("all");
  return (
    <div className="notifications__pg">
      <nav className="notifications__tabs">
        <div
          className={focusedTab === "all" ? "tab--focused" : "tab"}
          // onClick={handleClickNotificationsTab}
        >
          All
        </div>
        <div
          className={focusedTab === "mentions" ? "tab--focused" : "tab"}
          // onClick={handleClickNotificationsTab}
        >
          Mentions
        </div>
      </nav>
      <section className="notifications">
        <ul className="notifications__list">{renderNotifications()}</ul>
      </section>
    </div>
  );
};
export default Notifications;
