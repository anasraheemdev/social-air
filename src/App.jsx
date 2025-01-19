import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Feed from './components/Feed';

const App = () => {
  const trendingTopics = [
    { category: "Technology", title: "#AI", posts: "125K" },
    { category: "Sports", title: "World Cup", posts: "98K" },
    { category: "Entertainment", title: "#MovieNight", posts: "85K" },
  ];

  const suggestedUsers = [
    { name: "Sarah Wilson", username: "sarahw", avatar: "/avatar1.jpg" },
    { name: "Mike Chen", username: "mikec", avatar: "/avatar2.jpg" },
    { name: "Emma Davis", username: "emmad", avatar: "/avatar3.jpg" },
  ];

  return (
    <div className="flex min-h-screen bg-[#43B4FF]">
      <LeftSidebar />
      <Feed />
      <RightSidebar 
        trendingTopics={trendingTopics}
        suggestedUsers={suggestedUsers}
      />
    </div>
  );
};

export default App;