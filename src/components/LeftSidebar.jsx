import React from 'react';
import { Home, Search, Bell, Mail, Bookmark, User } from 'lucide-react';

const navigationItems = [
  { icon: <Home size={24} />, label: 'Home', link: '#' },
  { icon: <Search size={24} />, label: 'Explore', link: '#' },
  { icon: <Bell size={24} />, label: 'Notifications', link: '#' },
  { icon: <Mail size={24} />, label: 'Messages', link: '#' },
  { icon: <Bookmark size={24} />, label: 'Bookmarks', link: '#' },
  { icon: <User size={24} />, label: 'Profile', link: '#' },
];

const LeftSidebar = () => {
  return (
    <div className="w-1/4 border-r border-purple-300/20 p-4 hidden lg:block">
      <div className="fixed">
        <img src="public\images\air-logo.png" alt="" className="mb-8 w-52" />
        <nav className="space-y-6">
          {navigationItems.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className="flex items-center text-white hover:bg-purple-500/20 p-3 rounded-lg transition-colors"
            >
              {item.icon}
              <span className="ml-4 text-lg">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default LeftSidebar;



// import React from 'react'
// import { FaRegBell, FaRegUser, FaSearch } from 'react-icons/fa'
// import { FaXTwitter } from 'react-icons/fa6'
// import { FiLogOut } from 'react-icons/fi'
// import { LuMessageSquareMore } from 'react-icons/lu'
// import { MdHome, MdOutlineBookmarks } from 'react-icons/md'

// const LeftSideBar = () => {
//   return (
//     <>
//       <div>
//         <div>
//           <div>
//             <FaXTwitter size="40px" className='ml-5'/>
//           </div>
//           <div className='my-4'>

//             <div className='flex items-center my-2 px-4 py-2 hover:bg-blue-300 cursor-pointer rounded-full'>
//               <div><MdHome size="35px" /></div>
//               <h2 className='font-semibold text-lg ml-2'>Home</h2>
//             </div>
            
            
//             <div className='flex items-center my-2 px-4 py-2 hover:bg-blue-300 cursor-pointer rounded-full'>
//               <div><FaSearch size="25px" /></div>
//               <h2 className='font-semibold text-lg ml-2'>Explore</h2>
//             </div>
            
//             <div className='flex items-center my-2 px-4 py-2 hover:bg-blue-300 cursor-pointer rounded-full'>
//               <div><FaRegBell size="25px" /></div>
//               <h2 className='font-semibold text-lg ml-2'>Notifications</h2>
//             </div>
            
//             <div className='flex items-center my-2 px-4 py-2 hover:bg-blue-300 cursor-pointer rounded-full'>
//               <div><LuMessageSquareMore size="25px" /></div>
//               <h2 className='font-semibold text-lg ml-2'>Messages</h2>
//             </div>
            
//             <div className='flex items-center my-2 px-4 py-2 hover:bg-blue-300 cursor-pointer rounded-full'>
//               <div><FaRegUser size="25px" /></div>
//               <h2 className='font-semibold text-lg ml-2'>Profile</h2>
//             </div>
            
//             <div className='flex items-center my-2 px-4 py-2 hover:bg-blue-300 cursor-pointer rounded-full'>
//               <div><MdOutlineBookmarks size="25px" /></div>
//               <h2 className='font-semibold text-lg ml-2'>Bookmarks</h2>
//             </div>

//             <div className='flex items-center my-2 px-4 py-2 hover:bg-blue-300 cursor-pointer rounded-full'>
//               <div><FiLogOut size="25px" /></div>
//               <h2 className='font-semibold text-lg ml-2'>Logout</h2>
//             </div>
            
//             <button className="btn px-4 py-2 border-none text-md bg-[purple] w-full rounded-full font-bold text-white">Post</button>

//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default LeftSideBar
