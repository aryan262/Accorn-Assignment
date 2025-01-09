import React from 'react'
import { SunIcon, HomeIcon, TrendingUpIcon as TrendUpIcon, GridIcon, SearchIcon, BellIcon, InboxIcon as EnvelopeIcon } from 'lucide-react'
import { FaReddit } from 'react-icons/fa';

function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="flex items-center gap-4 p-2 border-b">
      <SunIcon className="w-6 h-6" />
      <div className="flex items-center gap-2">
         <FaReddit className="text-reddit-orange text-3xl" />
        <span className="text-xl font-semibold">reddit</span>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-full">
          <HomeIcon className="w-5 h-5" />
          <span>Home</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-full">
          <TrendUpIcon className="w-5 h-5" />
          <span>Popular</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-full">
          <GridIcon className="w-5 h-5" />
          <span>All</span>
        </button>
      </div>

      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Find community or post"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <button className="px-4 py-2 bg-[#FF4500] text-white rounded-full hover:bg-[#FF4500]/90">
        Create Post
      </button>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <BellIcon className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <EnvelopeIcon className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full">
          <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-8 h-8 rounded-full" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar