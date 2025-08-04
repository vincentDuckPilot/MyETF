'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Post {
  id: number
  title: string
  content: string | null
  published: boolean
  author: {
    name: string | null
    email: string
  } | null
}

export default function ApiDemoPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/posts')
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const deletePost = async (id: number) => {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete post')
      }
      // Refresh the posts list
      fetchPosts()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete post')
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-12">
          <p className="text-gray-500">Loading posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-12">
          <p className="text-red-500">Error: {error}</p>
          <button 
            onClick={fetchPosts}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">API Demo - Posts</h1>
        <Link 
          href="/example" 
          className="text-blue-500 hover:text-blue-600"
        >
          ← Back to Example
        </Link>
      </div>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 className="font-semibold text-blue-900 mb-2">API Endpoints Used:</h2>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• GET /api/posts - Fetch all posts</li>
          <li>• GET /api/posts/[id] - Fetch single post</li>
          <li>• POST /api/posts - Create new post</li>
          <li>• PUT /api/posts/[id] - Update post</li>
          <li>• DELETE /api/posts/[id] - Delete post</li>
        </ul>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.content || 'No content available'}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>By: {post.author?.name || 'Unknown'}</span>
                  <span>Status: {post.published ? 'Published' : 'Draft'}</span>
                  <span>ID: {post.id}</span>
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <Link 
                  href={`/example/${post.id}`}
                  className="text-blue-500 hover:text-blue-600"
                >
                  View
                </Link>
                <button
                  onClick={() => deletePost(post.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No posts found.</p>
        </div>
      )}
    </div>
  )
} 