import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { BsChat } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { HiOutlineHeart, HiHeart, HiDotsHorizontal } from "react-icons/hi";
import { FiShare } from "react-icons/fi";

import { toggleOptionsDrawer } from "../../../../actions";
import { AuthorMeta } from "../../../../types";
import { ActionType } from "../../../../actions/types";

type FeedCardProps = {
  id: string;
  key: number;
  text: string;
  authorMeta: AuthorMeta;
};

const FeedCard = ({ id, key, text, authorMeta }: FeedCardProps) => {
  const dispatch: Dispatch<ActionType> = useDispatch();
  const handleClickToggleOptionsDrawer = () => dispatch(toggleOptionsDrawer());

  return (
    <li className="quackcard" key={id}>
      <img
        className="quackcard__avatar"
        src={authorMeta.avatar}
        alt="avatar-image"
      />
      <div className="card__content">
        <div className="quackcard__author">
          <div className="author__displayName">{`${authorMeta.first_name} ${authorMeta.last_name}`}</div>
          <div className="author__username">{authorMeta.username}</div>
        </div>
        <div className="quackcard__text">{text}</div>
        <ul className="quackcard__metrics">
          <li className="quack__comment">
            <BsChat />
            <div className="metric--count">
              {Math.floor(Math.random() * 100) + 1}
            </div>
          </li>
          <li className="quack__requack">
            <FaRetweet />
            <div className="metric--count">
              {Math.floor(Math.random() * 250) + 1}
            </div>
          </li>
          <li className="quack__like">
            <HiOutlineHeart />
            <div className="metric--count">
              {Math.floor(Math.random() * 1000) + 1}
            </div>
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
