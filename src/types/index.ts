export interface User {
  id: string;
  name?: string;
  email: string;
}

export interface Tweet {
  tweet_id?: string;
  content?: string;
  created_at: string;
  type: string;
  user: {
    name: string;
    email: string;
  };
}

export interface CreateTweetPayload {
  content: string;
  sharedWith: string[];
}

export interface ShareTweetPayload {
  tweetId: string;
  userIds: string[];
}

export interface TweetResponse {
  data: Tweet[];
}

export interface TweetState {
  tweets: Tweet[];
  createdTweet: Tweet | null;
  loading: boolean;
  error: string | null;
}

export interface AuthState {
  user: User | null;
  users: User[];
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface SidebarProps {
  isOpen: boolean;
  onLogout: () => void;
}

export interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  text: string;
}

export interface TweetCardProps {
  tweet: Tweet;
}
