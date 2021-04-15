import React from "react";

import Sandy from "../../../assets/sandy_cheeks_avatar.png";
import Squidward from "../../../assets/squidward_avatar.png";
import Gary from "../../../assets/gary_avatar.png";
import Patrick from "../../../assets/patrick_avatar.png";
import MrKrabs from "../../../assets/mr_krabs_avatar.png";
import MsPuff from "../../../assets/ms_puff_avatar.png";

const messages = [
  {
    ts: 1613366609,
    username: "@sachee",
    author: "Sandy Cheeks",
    avatar: Sandy,
    message: "Hi",
  },
  {
    ts: 1613490278,
    username: "@yourfavsnail",
    author: "Gary",
    avatar: Gary,
    message: "Hi",
  },
  {
    ts: 1612251746,
    username: "@sexy.saxoph...",
    author: "Squidward Tentacles",
    avatar: Squidward,
    message: "Hi",
  },
  {
    ts: 1612700008,
    username: "@sachee",
    author: "Sandy Cheeks",
    avatar: Sandy,
    message: "Hi",
  },
  {
    ts: 1613370052,
    username: "@lonestar",
    author: "Patrick Star",
    avatar: Patrick,
    message: "Hi",
  },
  {
    ts: 1613068936,
    username: "@lonestar",
    author: "Patrick Starr",
    avatar: Patrick,
    message: "Hi",
  },
  {
    ts: 1612824642,
    author: "Gary",
    username: "@yourfavsnail",
    avatar: Gary,
    message: "Hi",
  },
  {
    ts: 1613645240,
    username: "@sachee",
    author: "Sandy Cheeks",
    avatar: Sandy,
    message: "Hi",
  },
  {
    ts: 1612361540,
    username: "@lonestar",
    author: "Patrick Starr",
    avatar: Patrick,
    message: "Hi",
  },
  {
    ts: 1612320803,
    username: "@lonestar",
    author: "Patrick Starr",
    avatar: Patrick,
    message: "Hi",
  },
  {
    ts: 1612237726,
    username: "@yourfavsnail",
    author: "Gary",
    avatar: Gary,
    message: "Hi",
  },
  {
    ts: 1613104368,
    username: "@sachee",
    author: "Sandy Cheeks",
    avatar: Sandy,
    message: "Hi",
  },
  {
    ts: 1612943757,
    username: "@lonestar",
    author: "Patrick Starr",
    avatar: Patrick,
    message: "Hi",
  },
  {
    ts: 1612299263,
    username: "@puff",
    author: "Mrs. Puff",
    avatar: MsPuff,
    message: "Hi",
  },
  {
    ts: 1612424076,
    username: "@lonestarr",
    author: "Patrick Starr",
    avatar: Patrick,
    message: "Hi",
  },
  {
    ts: 1613273497,
    username: "@yourfavsnail",
    author: "Gary",
    avatar: Gary,
    message: "Hi",
  },
  {
    ts: 1612579942,
    username: "@sachee",
    author: "Sandy Cheeks",
    avatar: Sandy,
    message: "Hi",
  },
  {
    ts: 1613614094,
    username: "@lonestar",
    author: "Patrick Starr",
    avatar: Patrick,
    message: "Hi",
  },
  {
    ts: 1613467849,
    username: "@krabbykrab",
    author: "Mr Krabs",
    avatar: MrKrabs,
    message: "Hi",
  },
  {
    ts: 1612533139,
    username: "@krabbykrab",
    author: "Mr Krabs",
    avatar: MrKrabs,
    message: "Hi",
  },
];

const renderMessages = () =>
  messages.map(({ ts, author, username, avatar, message }) => (
    <li className="message" key={ts}>
      <img
        loading={"lazy"}
        className="message__avatar"
        src={avatar}
        alt="avatar-image"
      />
      <div className="message__content">
        <div className="message__author">
          <div className="author__displayname">{author}</div>
          <div className="author__username">{username}</div>
        </div>
        <div className="message__text">{message}</div>
      </div>
    </li>
  ));

const Messages = () => {
  return (
    <div className="messages__pg">
      <input
        className="messages__search"
        type="search"
        placeholder="Search for people and groups"
        value=""
      />
      <section className="messages">
        <ul className="messages__list">{renderMessages()}</ul>
      </section>
    </div>
  );
};

export default Messages;
