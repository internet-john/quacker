import { useState } from "react";

import KrabbyPatty from "../../../assets/krabbypatty.png";
import ProfileAvatar from "../../../assets/profile__avatar.png";

const Profile = () => {
  const [focusedTab, setFocusedTab] = useState("quacks");

  const handleClickTab: (event: EventTarget) => EventTarget = function (
    event: EventTarget
  ) {
    event.preventDefault();

    setFocusedTab(event.target.id);
  };

  return (
    <div className="profile__pg">
      <div className="profile__banner">
        <img src={KrabbyPatty} />
      </div>
      <div className="profile__details">
        <div className="profile--edit">
          <img className="profilepg__avatar" src={ProfileAvatar} />
          <button className="profile__button--edit">Edit profile</button>
        </div>
        <div className="profile__names">
          <div className="profile__displayname">spongebob</div>
          <div className="profile__username">@krabbypaddydaddy</div>
        </div>
        <div className="profile__bio"></div>
        <div className="meta--misc">
          <div className="profile__site">
            <HiLink />
            <a href="https://jxh.today">jxh.today</a>
          </div>
          <div className="profile__joindate">Joined June 2015</div>
        </div>
        <div className="profile__metrics">
          <div className="metric--following__count">196</div> Following
          <div className="metric--follower__count">29831</div>
          Followers
        </div>
      </div>
      <nav className="profile__tabs">
        <div
          id="quacks"
          className={focusedTab === "quacks" ? "tab--focused" : "tab"}
          onClick={handleClickTab}
        >
          Quacks
        </div>
        <div
          id="quacksreplies"
          className={focusedTab === "quacksreplies" ? "tab--focused" : "tab"}
          onClick={handleClickTab}
        >
          Quacks & replies
        </div>
        <div
          id="media"
          className={focusedTab === "media" ? "tab--focused" : "tab"}
          onClick={handleClickTab}
        >
          Media
        </div>
        <div
          id="likes"
          className={focusedTab === "likes" ? "tab--focused" : "tab"}
          onClick={handleClickTab}
        >
          Likes
        </div>
      </nav>
    </div>
  );
};

export default Profile;
