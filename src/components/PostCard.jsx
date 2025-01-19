import React from 'react';
import { MessageSquare, Heart, Share2, Bookmark, MoreHorizontal, User } from 'lucide-react';

const PostCard = ({ post }) => {
  return (
    <div className="p-4 hover:bg-white/5 shadow-2xl">
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center">
            <User className="text-purple-800" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{post.author}</h3>
            <p className="text-white/60 text-sm">{post.username} · {post.timeAgo}</p>
          </div>
        </div>
        <button className="text-white/60 hover:text-white">
          <MoreHorizontal size={20} />
        </button>
      </div>
      
      <p className="mt-4 text-white">{post.content}</p>
      
      {post.media && (
        <div className="mt-4 rounded-lg overflow-hidden">
          <img 
            src={post.media.url}
            alt={post.media.alt}
            className="w-full h-auto object-cover hover:opacity-95 transition-opacity cursor-pointer"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="mt-4 flex items-center space-x-8 text-white/60">
        <button className="flex items-center space-x-2 hover:text-white">
          <Heart size={20} />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <MessageSquare size={20} />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <Share2 size={20} />
          <span>{post.shares}</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <Bookmark size={20} />
        </button>
      </div>
    </div>
  );
};

export default PostCard;