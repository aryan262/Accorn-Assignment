import React, { useState, useEffect } from 'react'
import { ChevronUpIcon, ChevronDownIcon, MessageSquareIcon, ShareIcon, MoreHorizontalIcon } from 'lucide-react'
function Popular() {
    const [posts, setPosts] = useState([])
    const [sort, setSort] = useState('hot')
    const [loading, setLoading] = useState(false)
    const [after, setAfter] = useState(null)

    useEffect(() => {
        fetchPosts()
    }, [sort])

    const fetchPosts = async (loadMore = false) => {
        if (loading) return
        setLoading(true)
        try {
            const url = new URL(`https://www.reddit.com/r/popular/${sort}/.json`)
            url.searchParams.append('limit', '5')
            if (loadMore && after) {
                url.searchParams.append('after', after)
            } else if (!loadMore) {
                setPosts([])
                setAfter(null)
            }

            const response = await fetch(url)
            const data = await response.json()

            if (loadMore) {
                setPosts(prevPosts => [...prevPosts, ...data.data.children])
            } else {
                setPosts(data.data.children)
            }
            setAfter(data.data.after)
        } catch (error) {
            console.error('Error fetching posts:', error)
        }
        setLoading(false)
    }

    const formatNumber = (num) => {
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
        if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
        return num
    }

    return (
        <div className="flex-1">
            <div className="mb-4">
                <h1 className="text-xl font-bold mb-4">Popular</h1>
                <div className="flex gap-4 border-b">
                    {['Hot', 'New', 'Controversial', 'Rising', 'Top'].map((option) => (
                        <button
                            key={option}
                            className={`px-4 py-2 font-medium ${sort === option.toLowerCase() ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'
                                }`}
                            onClick={() => setSort(option.toLowerCase())}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.data.id} className="flex gap-4 p-4 border rounded-lg">
                        {post.data.thumbnail && post.data.thumbnail !== 'self' && (
                            <div className="w-24 h-24 flex-shrink-0">
                                <img
                                    src={post.data.thumbnail}
                                    alt=""
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        )}

                        <div className="flex-1">
                            <h2 className="text-lg font-medium mb-2">{post.data.title}</h2>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                <img
                                    src={post.data.thumbnail && post.data.thumbnail !== 'self' ? post.data.thumbnail : '/placeholder.svg?height=20&width=20'}
                                    alt=""
                                    className="w-5 h-5 rounded-full"
                                />
                                <span>Posted by u/{post.data.author}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex flex-col items-center">
                                <button className="p-1 hover:bg-gray-100 rounded">
                                    <ChevronUpIcon className="w-5 h-5" />
                                </button>
                                <span className="text-sm font-medium">{formatNumber(post.data.score)}</span>
                                <button className="p-1 hover:bg-gray-100 rounded">
                                    <ChevronDownIcon className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded text-gray-500">
                                    <MessageSquareIcon className="w-4 h-4" />
                                    <span className="text-sm">{formatNumber(post.data.num_comments)}</span>
                                </button>
                                <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded text-gray-500">
                                    <ShareIcon className="w-4 h-4" />
                                </button>
                                <button className="p-1 hover:bg-gray-100 rounded text-gray-500">
                                    <MoreHorizontalIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* <div className="flex flex-col items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronUpIcon className="w-5 h-5" />
                </button>
                <span className="text-sm font-medium">{formatNumber(post.data.score)}</span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronDownIcon className="w-5 h-5" />
                </button>
                <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded text-gray-500">
                  <MessageSquareIcon className="w-4 h-4" />
                  <span className="text-sm">{formatNumber(post.data.num_comments)}</span>
                </button>
                <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded text-gray-500">
                  <ShareIcon className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded text-gray-500">
                  <MoreHorizontalIcon className="w-4 h-4" />
                </button>
              </div> */}
                    </div>
                ))}
            </div>

            {loading && (
                <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
            )}

            {!loading && after && (
                <div className="flex justify-center mt-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={() => fetchPosts(true)}
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    )
}

export default Popular