import React from 'react';
import { Image, Play, User } from 'lucide-react';

const CreatePost = () => {
  return (
    <div className="p-4 border-b border-purple-300/20 sticky top-0 bg-[#43B4FF] z-10">
      <div className="bg-white/10 rounded-lg p-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center">
            <User className="text-purple-800" />
          </div>
          <input
            type="text"
            placeholder="What's on your mind?"
            className="bg-white/10 text-white placeholder-white/60 flex-1 p-2 rounded-lg outline-none"
          />
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-white/80 hover:text-white">
            <Image className="w-5 h-5" />
            <span>Photo</span>
          </button>
          <button className="flex items-center space-x-2 text-white/80 hover:text-white">
            <Play className="w-5 h-5" />
            <span>Video</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;