
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { User } from '../../types';
import { generalHelspers } from '../../helpers';

interface CreateTweetModalProps {
  onClose: () => void;
  onSubmit: (content: string, selectedUsers: string[]) => Promise<void>;
  users: User[];
}

const CreateTweetModal: React.FC<CreateTweetModalProps> = ({ onClose, onSubmit, users }) => {
  const [content, setContent] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const { decodeToken } = generalHelspers;
  const userData = decodeToken(localStorage.getItem("token") as string) as { userId: string };

  const handleUserSelect = (userId: string) => {
    setSelectedUsers(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(userId)) {
        newSelected.delete(userId);
      } else {
        newSelected.add(userId);
      }
      return newSelected;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(content, Array.from(selectedUsers));
    setContent("");
    setSelectedUsers(new Set());
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Create New Tweet</h2>
            <button type="button" onClick={onClose}>
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <textarea
            className="w-full h-32 p-2 border rounded-lg mb-4 resize-none"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Share with:</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {users.map((user) => (
                <label key={user.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedUsers.has(user.id)}
                    onChange={() => handleUserSelect(user.id)}
                    className="rounded border-gray-300"
                    disabled={user.id === userData.userId}
                  />
                  <span>{user.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!content.trim()}
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTweetModal;