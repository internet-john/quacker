import React from "react";

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

const FeedCard = ({ id, text }: FeedCardProps) => (
  <li className="quackcard" key={id}>
    {text}
  </li>
);

export default FeedCard;
