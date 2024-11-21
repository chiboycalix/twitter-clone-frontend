import React from 'react';
import { TweetCardProps } from '../../types';
import { Globe, ShareIcon } from 'lucide-react';
import { formatDistanceToNow, parseISO } from 'date-fns';

const formatTweetDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
    return new Date(dateString).toLocaleString();
  }
};

const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  const isCreated = tweet.type === 'created';

  return (
    <div className={`
      relative bg-white shadow rounded-lg p-4 sm:p-6 
      ${isCreated
        ? 'border-l-4 border-primary-500'
        : 'border border-gray-200'
      }
    `}>
      <div className={`
        absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium
        flex items-center gap-1
        ${isCreated
          ? 'bg-primary-50 text-primary-600'
          : 'bg-gray-50 text-gray-600'
        }
      `}>
        {isCreated ? (
          <>
            <Globe className="h-3 w-3" />
            <span>created by me</span>
          </>
        ) : (
          <>
            <ShareIcon className="h-3 w-3" />
            <span>shared with me</span>
          </>
        )}
      </div>

      <div className="flex items-center space-x-3 mb-4">
        <div className={`
          h-10 w-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-medium
          ${isCreated ? 'bg-primary-500' : 'bg-gray-500'}
        `}>
          {tweet?.user?.name?.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-medium truncate">{tweet?.user?.name}</h3>
          <time
            dateTime={tweet.created_at}
            className="text-xs text-gray-500"
            title={new Date(tweet.created_at).toLocaleString()}
          >
            {formatTweetDate(tweet.created_at)}
          </time>
        </div>
      </div>

      <div className={`
        rounded-lg p-3
        ${isCreated ? 'bg-primary-50' : 'bg-gray-50'}
      `}>
        <p className="text-gray-800 break-words">{tweet.content}</p>
      </div>
    </div>
  );
};

export default TweetCard;