import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { BsChat } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { HiOutlineHeart, HiHeart, HiDotsHorizontal } from "react-icons/hi";
import {
  GiDoctorFace,
  GiDoubleFaceMask,
  GiDwarfFace,
  GiFaceToFace,
  GiInvisibleFace,
  GiMonkFace,
  GiNunFace,
  GiTreeFace,
  GiWitchFace,
} from "react-icons/gi";
import { FiShare } from "react-icons/fi";

import { toggleOptionsDrawer } from "../../../actions";

// type QuackStatsProps = {
//     comments: number,
//     requacks: number,
//     likes: number
// }

// type AuthorMetaProps = {
//     avatar: string,
//     displayName: string,
//     userName: string,
//     timestamp: string,
//     quack: string,
//     quackStats: QuackStatsProps,
//     likedByFollowed: string[]
// }

// type FeedCardProps = {
//     authorMeta: AuthorMetaProps,
//     quackStats: QuackStatsProps
// }
type FeedCardProps = {
  id: string;
  text: string;
};

const randomizeAvatar = (id: string) => {
  const lastIdNum: string = id.slice(-1);
  let avatar;
  switch (lastIdNum) {
    case "0":
      return <GiDoctorFace className="author__avatar" />;
    case "1":
      return <GiDoubleFaceMask className="author__avatar" />;
    case "2":
      return <GiDwarfFace className="author__avatar" />;
    case "3":
      return <GiFaceToFace className="author__avatar" />;
    case "4":
      return <GiInvisibleFace className="author__avatar" />;
    case "5":
      return <GiMonkFace className="author__avatar" />;
    case "6":
      return <GiNunFace className="author__avatar" />;
    case "8":
      return <GiTreeFace className="author__avatar" />;
    case "9":
      return <GiWitchFace className="author__avatar" />;
    default:
      break;
  }

  return avatar;
};

const FeedCard = ({ id, text }: FeedCardProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  const handleClickToggleOptionsDrawer = () => dispatch(toggleOptionsDrawer());

  return (
    <li className="quackcard" key={id}>
      {randomizeAvatar(id)}
      <div className="card__content">
        <div className="quackcard__author">
          <div className="author__displayName">Spongebob</div>
          <div className="author__username">@Squarepants</div>
        </div>
        <div className="quackcard__text">{text}</div>
        <ul className="quackcard__metrics">
          <li className="quack__comment">
            <BsChat />
            <div className="metric--count">12</div>
          </li>
          <li className="quack__requack">
            <FaRetweet /> <div className="metric--count">8</div>
          </li>
          <li className="quack__like">
            <HiOutlineHeart />
            <div className="metric--count">26</div>
          </li>
          <li className="quack__share">
            <FiShare />
          </li>
        </ul>
      </div>
      <HiDotsHorizontal
        className="btn--options"
        onClick={handleClickToggleOptionsDrawer}
      />
    </li>
  );
};

export default FeedCard;
