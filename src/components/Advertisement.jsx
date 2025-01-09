import React from 'react'
import { FaReddit } from 'react-icons/fa'

function Advertisement() {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-4 text-white">
        <h2 className="text-2xl font-bold mb-2">SUMMER BIG</h2>
        <div className="text-4xl font-black mb-4">SALE</div>
        <div className="flex items-center gap-2">
          <span className="text-2xl line-through">$300</span>
          <span className="text-3xl font-bold">$29.99</span>
        </div>
      </div>
      <div className="bg-white p-4 text-center">
        {/* <img src="/placeholder.svg?height=40&width=40" alt="Reddit" className="w-10 h-10 mx-auto mb-2" /> */}
        <FaReddit className="text-reddit-orange text-3xl w-10 h-10 mx-auto mb-2" />
        <h3 className="font-medium mb-2">Advertise on Reddit</h3>
        <button className="w-full px-4 py-2 bg-[#FF4500] text-white rounded-full hover:bg-[#FF4500]/90">
          GET STARTED
        </button>
      </div>
    </div>
  )
}

export default Advertisement