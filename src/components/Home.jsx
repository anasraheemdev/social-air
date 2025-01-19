import React from 'react'
import SocialFeed from './SocialFeed'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSideBar'


const Home = () => {
  return (
    <>
    <div className='flex justify-between w-[80%]  mx-auto'>
        <LeftSidebar/>
        <SocialFeed/>
        <RightSidebar/>
    </div>
    </>
  )
}

export default Home
