import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Popular from './components/Popular'
import Advertisement from './components/Advertisement'


function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    // <div className="min-h-screen bg-[#FF7F7F]">
      <div className="mx-auto min-h-screen bg-white rounded-lg shadow-lg ">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="flex gap-4 p-4">
          <Sidebar />
          <Popular />
          <div className="w-72">
            <Advertisement />
          </div>
        </div>
      </div>
    // </div>
  )
}

export default App
