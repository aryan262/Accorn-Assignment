import { useState, useCallback } from 'react'
import { SunIcon, HomeIcon, TrendingUpIcon as TrendUpIcon, GridIcon, SearchIcon, BellIcon, InboxIcon as EnvelopeIcon } from 'lucide-react'
import debounce from 'lodash/debounce'

export default function Navbar({ setSearchResults }) {
  const [isSearching, setIsSearching] = useState(false)
  const [searchError, setSearchError] = useState(null)

  const debouncedSearch = useCallback(
    debounce(async (query) => {
      if (!query.trim()) {
        setSearchResults(null)
        return
      }
      
      setIsSearching(true)
      setSearchError(null)
      
      try {
        const response = await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(query)}&limit=8`)
        if (!response.ok) {
          throw new Error('Search request failed')
        }
        const data = await response.json()
        setSearchResults(data.data.children)
      } catch (error) {
        setSearchError('Search failed. Please try again later.')
        console.error('Search error:', error)
      } finally {
        setIsSearching(false)
      }
    }, 500),
    [setSearchResults]
  )

  return (
    <nav className="flex flex-wrap items-center gap-4 p-2 border-b">
      <SunIcon className="w-6 h-6" />
      <div className="flex items-center gap-2">
        <img src="/placeholder.svg?height=32&width=32" alt="Reddit Logo" className="h-8" />
        <span className="text-xl font-semibold">reddit</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
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

      <div className="flex-1 max-w-2xl order-last md:order-none w-full md:w-auto mt-2 md:mt-0">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Find community or post"
            className={`w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 ${
              searchError ? 'focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
            onChange={(e) => debouncedSearch(e.target.value)}
          />
          {isSearching && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
            </div>
          )}
        </div>
        {searchError && (
          <div className="absolute w-full mt-1 p-2 bg-red-50 text-red-600 text-sm rounded-md">
            {searchError}
          </div>
        )}
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

