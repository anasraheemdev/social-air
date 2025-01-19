import React from 'react';
import { Search, User } from 'lucide-react';

const RightSidebar = ({ trendingTopics, suggestedUsers }) => {
  return (
    <div className="w-1/4 p-4 hidden lg:block">
      <div className="fixed w-1/4 pr-4">
        {/* Search Bar */}
        <div className="bg-white/10 rounded-lg p-3 mb-6">
          <div className="flex items-center space-x-2">
            <Search className="text-white/60" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white placeholder-white/60 outline-none w-full"
            />
          </div>
        </div>

        {/* Trending Topics */}
        <div className="bg-white/10 rounded-lg p-4 mb-6">
          <h3 className="text-white font-bold text-xl mb-4">Trending</h3>
          <div className="space-y-4">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="text-white">
                <p className="text-white/60 text-sm">Trending in {topic.category}</p>
                <p className="font-bold">{topic.title}</p>
                <p className="text-white/60 text-sm">{topic.posts} posts</p>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Users */}
        <div className="bg-white/10 rounded-lg p-4">
          <h3 className="text-white font-bold text-xl mb-4">Who to follow</h3>
          <div className="space-y-4">
            {suggestedUsers.map((user, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center">
                    <User className="text-purple-800" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{user.name}</p>
                    <p className="text-white/60 text-sm">@{user.username}</p>
                  </div>
                </div>
                <button className="bg-white text-black px-4 py-1 rounded-full font-semibold hover:bg-white/90">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;