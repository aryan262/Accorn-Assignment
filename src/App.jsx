import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Popular from './components/Popular'
import Advertisement from './components/Advertisement'


function App() {
  const [searchResults, setSearchResults] = useState(null)

  return (
      <div className="mx-auto min-h-screen bg-white rounded-lg shadow-lg ">
        <Navbar setSearchResults={setSearchResults} />
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <Popular searchResults={searchResults} />
          <div className="hidden lg:block w-72">
            <Advertisement />
          </div>
        </div>
      </div>
  )
}

export default App
