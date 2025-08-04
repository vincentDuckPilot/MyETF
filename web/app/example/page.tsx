import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
    orderBy: {
      id: 'desc',
    },
  })

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">MyETF - Prisma + Next.js Demo</h1>
        <p className="text-gray-600 mb-6">
          A simple blog application demonstrating Prisma ORM with Next.js App Router, 
          including server-side rendering, API routes, and client-side interactions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 border rounded-lg bg-blue-50">
            <h3 className="font-semibold text-blue-900 mb-2">Server-Side Features</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Server Components with Prisma</li>
              <li>• Server Actions for forms</li>
              <li>• Dynamic routes</li>
              <li>• Database queries</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg bg-green-50">
            <h3 className="font-semibold text-green-900 mb-2">API Features</h3>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• REST API endpoints</li>
              <li>• Client-side data fetching</li>
              <li>• CRUD operations</li>
              <li>• Error handling</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Posts</h2>
        <div className="flex gap-4">
          <Link 
            href="/example/new" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Create New Post
          </Link>
          <Link 
            href="/example/api-demo" 
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            API Demo
          </Link>
        </div>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.content || 'No content available'}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>By: {post.author?.name || 'Unknown'}</span>
                  <span>Status: {post.published ? 'Published' : 'Draft'}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link 
                  href={`/example/${post.id}`}
                  className="text-blue-500 hover:text-blue-600"
                >
                  View
                </Link>
                <Link 
                  href={`/example/${post.id}/edit`}
                  className="text-green-500 hover:text-green-600"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No posts found. Create your first post!</p>
          <Link 
            href="/example/new" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Create First Post
          </Link>
        </div>
      )}
    </div>
  )
} 