import React from 'react';
import TweetCard from './TweetCard';
import { Tweet } from '../../types';

interface TweetListProps {
  tweets: Tweet[];
}

const TweetList: React.FC<TweetListProps> = ({ tweets }) => {
  return (
    <div className="space-y-4">
      {tweets?.map((tweet) => (
        <TweetCard key={tweet.tweet_id} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;