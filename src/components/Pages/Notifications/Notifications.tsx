import React, { useState } from "react";

import Sandy from "../../../assets/sandy_cheeks_avatar.png";
import Squidward from "../../../assets/squidward_avatar.png";
import Gary from "../../../assets/gary_avatar.png";
import Patrick from "../../../assets/patrick_avatar.png";
import MrKrabs from "../../../assets/mr_krabs_avatar.png";
import MsPuff from "../../../assets/ms_puff_avatar.png";
import { HiHeart } from "../../../assets/icons";
const notifications = [
  {
    ts: 1613366609,
    author: "Sandy Cheeks",
    avatar: Sandy,
    type: "like__quack",
  },
  { ts: 1613490278, author: "Gary", avatar: Gary, type: "like__quack" },
  {
    ts: 1612251746,
    author: "Squidward Tentacles",
    avatar: Squidward,
    type: "reply__quack",
  },
  {
    ts: 1612700008,
    author: "Sandy Cheeks",
    avatar: Sandy,
    type: "like__quack",
  },
  {
    ts: 1613370052,
    author: "Patrick Starr",
    avatar: Patrick,
    type: "like__reply",
  },
  {
    ts: 1613068936,
    author: "Patrick Starr",
    avatar: Patrick,
    type: "requack__quack",
  },
  { ts: 1612824642, author: "Gary", avatar: Gary, type: "like__reply" },
  {
    ts: 1613645240,
    author: "Sandy Cheeks",
    avatar: Sandy,
    type: "like__reply",
  },
  {
    ts: 1612361540,
    author: "Patrick Starr",
    avatar: Patrick,
    type: "like__requack",
  },
  {
    ts: 1612320803,
    author: "Patrick Starr",
    avatar: Patrick,
    type: "requack__quack",
  },
  {
    ts: 1612237726,
    author: "Gary",
    avatar: Gary,
    type: "reply__requack",
  },
  {
    ts: 1613104368,
    author: "Sandy Cheeks",
    avatar: Sandy,
    type: "like__reply",
  },
  {
    ts: 1612943757,
    author: "Patrick Starr",
    avatar: Patrick,
    type: "like__quack",
  },
  { ts: 1612299263, author: "Mrs. Puff", avatar: MsPuff, type: "follow" },
  {
    ts: 1612424076,
    author: "Patrick Starr",
    avatar: Patrick,
    type: "requack__requack",
  },
  { ts: 1613273497, author: "Gary", avatar: Gary, type: "like__quack" },
  {
    ts: 1612579942,
    author: "Sandy Cheeks",
    avatar: Sandy,
    type: "reply__reply",
  },
  {
    ts: 1613614094,
    author: "Patrick Starr",
    avatar: Patrick,
    type: "like__requack",
  },
  {
    ts: 1613467849,
    author: "Mr Krabs",
    avatar: MrKrabs,
    type: "like__quack",
  },
  { ts: 1612533139, author: "Mr Krabs", avatar: MrKrabs, type: "follow" },
];

const renderNotifications = () =>
  notifications.map(({ ts, author, avatar, type }) => {
    if (type === "follow") {
      return (
        <li className="notification--follow" key={ts}>
          <div className="notification__content">
            <div className="notification__authorgraphic">
              <BsPersonFill />
              <img className="notification__author--avatar" src={avatar} />
            </div>
            <div className="notification__text">
              <strong>{author}</strong> followed you
            </div>
          </div>
        </li>
      );
    } else if (type === "reply__quack") {
      return (
        <li className="notification--reply" key={ts}>
          <div className="notification__content">
            <div className="notification__authorgraphic">
              <BsChatFill />
              <img className="notification__author--avatar" src={avatar} />
            </div>
            <div className="notification__text">
              <strong>{author}</strong> replied to your quack
            </div>
          </div>
        </li>
      );
    } else if (type === "reply__requack") {
      return (
        <li className="notification--reply" key={ts}>
          <div className="notification__content">
            <div className="notification__authorgraphic">
              <BsChatFill />
              <img className="notification__author--avatar" src={avatar} />
            </div>
            <div className="notification__text">
              <strong>{author}</strong> replied to your Requack
            </div>
          </div>
        </li>
      );
    } else if (type === "reply__reply") {
      return (
        <li className="notification--reply" key={ts}>
          <div className="notification__content">
            <div className="notification__authorgraphic">
              <BsChatFill />
              <img className="notification__author--avatar" src={avatar} />
            </div>
            <div className="notification__text">
              <strong>{author}</strong> replied to your reply
            </div>
          </div>
        </li>
      );
    } else if (type === "like__quack") {
      return (
        <li className="notification--like" key={ts}>
          <div className="notification__content">
            <div className="notification__authorgraphic">
              <HiHeart />
              <img className="notification__author--avatar" src={avatar} />{" "}
            </div>
            <div className="notification__text">
              <strong>{author}</strong> liked your Quack
            </div>
          </div>
        </li>
      );
    } else if (type === "like__reply") {
      return (
        <li className="notification--like" key={ts}>
          <div className="notification__content">
            <div className="notification__authorgraphic">
              <FcLike />
              <img className="notification__author--avatar" src={avatar} />
            </div>
            <div className="notification__text">
              <strong>{author}</strong> liked your reply
            </div>
          </div>
        </li>
      );
    } else if (type === "like__requack") {
      return (
        <li className="notification--like" key={ts}>
          <div className="notification__content">
            <div className="notification__authorgraphic">
              <FcLike />
              <img className="notification__author--avatar" src={avatar} />
            </div>
            <div className="notification__text">
              <strong>{author}</strong> liked your Requack
            </div>
          </div>
        </li>
      );
    } else if (type === "requack__quack") {
      return (
        <li className="notification--requack" key={ts}>
          <div className="notification__content">
            <div className="notification__authorgraphic">
              <BiRepost />
              <img className="notification__author--avatar" src={avatar} />
            </div>
            <div className="notification__text">
              <strong>{author}</strong> requacked your quack
            </div>
          </div>
        </li>
      );
    } else if (type === "requack__reply") {
      return (
        <li className="notification--requack" key={ts}>
          <div className="notification__content">
            <div className="notification__authorgraphic">
              <BiRepost />
              <img className="notification__author--avatar" src={avatar} />
            </div>
            <div className="notification__text">
              <strong>{author}</strong> requacked your reply
            </div>
          </div>
        </li>
      );
    } else if (type === "requack__requack") {
      return (
        <li className="notification--requack" key={ts}>
          <div className="notification__content">
            <div className="notification__authorgraphic">
              <BiRepost />
              <img className="notification__author--avatar" src={avatar} />
            </div>
            <div className="notification__text">
              <strong>{author}</strong> requacked your quack
            </div>
          </div>
        </li>
      );
    } else {
      return (
        <li className="notification--general" key={ts}>
          <div className="notification__content">
            <div className="notification__authorgraphic">
              <BsLightningFill />
            </div>
            Alert!
          </div>
        </li>
      );
    }
  });

const Notifications = () => {
  const [focusedTab, setFocusedTab] = useState("all");

  const handleClickNotificationsTab: (
    event: React.MouseEvent<HTMLDivElement>
  ) => void = function (event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();

    setFocusedTab(event.target.id);
  };

  return (
    <div className="notifications__pg">
      <nav className="notifications__tabs">
        <div
          id="all"
          className={
            focusedTab === "all"
              ? "notifications__tab--focused"
              : "notifications__tab"
          }
          onClick={handleClickNotificationsTab}
        >
          All
        </div>
        <div
          id="mentions"
          className={
            focusedTab === "mentions"
              ? "notifications__tab--focused"
              : "notifications__tab"
          }
          onClick={handleClickNotificationsTab}
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
