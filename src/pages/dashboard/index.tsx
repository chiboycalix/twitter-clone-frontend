import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchTweets, createTweet, clearError } from '../../store/slices/tweetSlice';
import { fetchUsers } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import TweetList from '../../components/Tweet/TweetList';
import CreateTweetModal from '../../components/Tweet/CreateTweetModal';

const useAppSelector = useSelector.withTypes<RootState>();
const useAppDispatch = () => useDispatch<AppDispatch>();

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { loading, tweets } = useAppSelector((state) => state.tweet);
  const { users } = useAppSelector((state) => state.auth);
  const [showCreateTweet, setShowCreateTweet] = useState(false);

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchUsers());
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleCreateTweet = async (content: string, selectedUsers: string[]) => {
    try {
      await dispatch(createTweet({
        content,
        sharedWith: selectedUsers
      })).unwrap();

      setShowCreateTweet(false);
      dispatch(fetchTweets());
    } catch (error) {
      console.error('Failed to create tweet:', error);
    }
  };

  if (loading && tweets.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl py-6 px-4 sm:px-6">
        <button
          onClick={() => setShowCreateTweet(true)}
          className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
        >
          <Send className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Create Tweet</span>
        </button>

        <TweetList tweets={tweets} />
      </div>

      {showCreateTweet && (
        <CreateTweetModal
          onClose={() => setShowCreateTweet(false)}
          onSubmit={handleCreateTweet}
          users={users}
        />
      )}
    </div>
  );
};

export default Dashboard;