import React from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';

const Feed = () => {
  const posts = [
    {
      id: 1,
      author: "Jane Cooper",
      username: "@janecooper",
      content: "Exploring the urban jungle 🌆 #cityscape #photography",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
        alt: "City view with modern architecture"
      },
      likes: 1242,
      comments: 89,
      shares: 45,
      timeAgo: "2h"
    },
    {
      id: 2,
      author: "Alex Morgan",
      username: "@alexmorgan",
      content: "Morning meditation by the lake 🧘‍♀️ #wellness #nature",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1528872042734-8f50f9d3c59b",
        alt: "Serene lake view at sunrise"
      },
      likes: 2890,
      comments: 156,
      shares: 78,
      timeAgo: "4h"
    },
    {
      id: 3,
      author: "Tom Wilson",
      username: "@tomw",
      content: "Street photography vibes 📸 #urban #photography",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1514565131-fce0801e5785",
        alt: "Urban street scene"
      },
      likes: 1567,
      comments: 92,
      shares: 45,
      timeAgo: "6h"
    },
    {
      id: 4,
      author: "Emily Chen",
      username: "@emilyc",
      content: "Perfect workspace setup complete! Ready for some productive coding sessions 💻 #coding #productivity",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        alt: "Modern workspace with laptop and coffee"
      },
      likes: 3421,
      comments: 234,
      shares: 89,
      timeAgo: "8h"
    },
    {
      id: 5,
      author: "David Kim",
      username: "@davidk",
      content: "Epic sunrise hike at Mount Rainier 🏔️ Worth waking up at 4AM! #hiking #adventure",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        alt: "Mountain sunrise view"
      },
      likes: 5632,
      comments: 342,
      shares: 167,
      timeAgo: "12h"
    },
    {
      id: 6,
      author: "Sarah Johnson",
      username: "@sarahj",
      content: "Coffee and art journaling kind of morning ☕️ #creativity #mindfulness",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
        alt: "Coffee cup and journal"
      },
      likes: 2156,
      comments: 145,
      shares: 67,
      timeAgo: "14h"
    },
    {
      id: 7,
      author: "Michael Brown",
      username: "@michaelb",
      content: "Night photography in downtown Seattle 🌃 #nightlife #cityscape",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
        alt: "City at night"
      },
      likes: 4267,
      comments: 289,
      shares: 134,
      timeAgo: "16h"
    },
    {
      id: 8,
      author: "Lisa Anderson",
      username: "@lisaa",
      content: "Weekend farmers market haul 🌱 Supporting local businesses! #organic #sustainable",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1488459716781-31db52582fe9",
        alt: "Fresh produce from farmers market"
      },
      likes: 1893,
      comments: 167,
      shares: 45,
      timeAgo: "18h"
    },
    {
      id: 9,
      author: "James Wilson",
      username: "@jamesw",
      content: "Architecture photography at its finest 🏛️ The symmetry here is incredible! #architecture #design",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        alt: "Modern architectural design"
      },
      likes: 3567,
      comments: 234,
      shares: 89,
      timeAgo: "20h"
    },
    {
      id: 10,
      author: "Emma Davis",
      username: "@emmad",
      content: "My little urban garden is thriving! 🌿 #urbangardening #plants",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
        alt: "Urban garden with plants"
      },
      likes: 2345,
      comments: 178,
      shares: 56,
      timeAgo: "22h"
    },
    {
      id: 11,
      author: "Chris Martinez",
      username: "@chrism",
      content: "Beach cleanup day with the community! Together we can make a difference 🌊 #environment #community",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1520333789090-1afc82db536a",
        alt: "Beach cleanup volunteers"
      },
      likes: 4521,
      comments: 312,
      shares: 245,
      timeAgo: "1d"
    },
    {
      id: 12,
      author: "Rachel Green",
      username: "@rachelg",
      content: "Studio session with these incredible musicians 🎸 New album coming soon! #music #recording",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
        alt: "Recording studio session"
      },
      likes: 3789,
      comments: 267,
      shares: 134,
      timeAgo: "1d"
    },
    {
      id: 13,
      author: "Daniel Lee",
      username: "@danl",
      content: "First snow of the season ❄️ The city looks magical! #winter #snowday",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1418985991508-e47386d96a71",
        alt: "Snowy city street"
      },
      likes: 5678,
      comments: 345,
      shares: 234,
      timeAgo: "1d"
    },
    {
      id: 14,
      author: "Sofia Rodriguez",
      username: "@sofiar",
      content: "Art gallery opening night was a success! 🎨 Thank you everyone who came! #art #gallery",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5",
        alt: "Art gallery exhibition"
      },
      likes: 2987,
      comments: 198,
      shares: 87,
      timeAgo: "1d"
    },
    {
      id: 15,
      author: "Robert Taylor",
      username: "@robertt",
      content: "Sunset yoga session at the beach 🌅 Perfect end to the day #yoga #mindfulness",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
        alt: "Beach yoga at sunset"
      },
      likes: 3456,
      comments: 234,
      shares: 98,
      timeAgo: "1d"
    }
  ];

  return (
    <div className="w-full lg:w-2/4 border-r border-purple-300/20">
      <CreatePost />
      <div className="divide-y divide-purple-300/20">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;