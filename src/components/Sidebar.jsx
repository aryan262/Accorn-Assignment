import React from 'react'

function Sidebar() {
    const favorites = [
        { name: 'r/funymore', count: 156, avatar: '/placeholder.svg?height=32&width=32' },
        { name: 'r/breakingnews', count: 12, avatar: '/placeholder.svg?height=32&width=32' },
        { name: 'r/lovestory', count: 0, avatar: '/placeholder.svg?height=32&width=32' },
        { name: 'r/gamingfun', count: 68, avatar: '/placeholder.svg?height=32&width=32' },
    ]

    const redditFeeds = [
        { name: 'r/movies', count: 4, avatar: '/placeholder.svg?height=32&width=32' },
        { name: 'r/gaming', count: 0, avatar: '/placeholder.svg?height=32&width=32' },
        { name: 'r/pics', count: 32, avatar: '/placeholder.svg?height=32&width=32' },
        { name: 'r/gifs', count: 0, avatar: '/placeholder.svg?height=32&width=32' },
    ]

    const community = [
        { name: 'r/funymore', avatar: '/placeholder.svg?height=32&width=32' },
        { name: 'r/breakingnews', avatar: '/placeholder.svg?height=32&width=32' },
        { name: 'r/gaming', count: 43, avatar: '/placeholder.svg?height=32&width=32' },
        { name: 'r/lovestory', count: 12, avatar: '/placeholder.svg?height=32&width=32' },
    ]

    return (
        <aside className="w-64 space-y-6">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <h2 className="font-medium">Filter by</h2>
                    <button className="text-sm text-gray-500">All</button>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between mb-2">
                    <h2 className="font-medium">FAVORITES</h2>
                    <button className="text-sm text-gray-500">All</button>
                </div>
                <ul className="space-y-2">
                    {favorites.map((item) => (
                        <li key={item.name} className="flex items-center gap-2">
                            <img src={item.avatar} alt="" className="w-6 h-6 rounded-full" />
                            <span className="flex-1">{item.name}</span>
                            {item.count > 0 && <span className="text-sm text-gray-500">{item.count}</span>}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <div className="flex items-center justify-between mb-2">
                    <h2 className="font-medium">REDDIT FEEDS</h2>
                    <button className="text-sm text-gray-500">All</button>
                </div>
                <ul className="space-y-2">
                    {redditFeeds.map((item) => (
                        <li key={item.name} className="flex items-center gap-2">
                            <img src={item.avatar} alt="" className="w-6 h-6 rounded-full" />
                            <span className="flex-1">{item.name}</span>
                            {item.count > 0 && <span className="text-sm text-gray-500">{item.count}</span>}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <div className="flex items-center justify-between mb-2">
                    <h2 className="font-medium">COMMUNITY</h2>
                    <button className="text-sm text-gray-500">All</button>
                </div>
                <ul className="space-y-2">
                    {community.map((item) => (
                        <li key={item.name} className="flex items-center gap-2">
                            <img src={item.avatar} alt="" className="w-6 h-6 rounded-full" />
                            <span className="flex-1">{item.name}</span>
                            {item.count > 0 && <span className="text-sm text-gray-500">{item.count}</span>}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar