import React from 'react';

type QuackStatsProps = {
    comments: number,
    requacks: number,
    likes: number
}

type AuthorMetaProps = {
    avatar: string,
    displayName: string,
    userName: string,
    timestamp: string,
    quack: string,
    quackStats: QuackStatsProps,
    likedByFollowed: string[]
}

type FeedCardProps = {
    authorMeta: AuthorMetaProps,
    quackStats: QuackStatsProps
}

const FeedCard = ({authorMeta, quackStats}: FeedCardProps) => <li>blAHH</li>

export default FeedCard;