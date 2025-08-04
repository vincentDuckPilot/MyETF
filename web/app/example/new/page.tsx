import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export default function NewPostPage() {
  async function createPost(formData: FormData) {
    'use server'
    
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const published = formData.get('published') === 'on'
    
    // Get the first user as author (for simplicity)
    const user = await prisma.user.findFirst()
    
    if (!user) {
      throw new Error('No user found')
    }
    
    await prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId: user.id,
      },
    })
    
    redirect('/example')
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/example" 
          className="text-blue-500 hover:text-blue-600"
        >
          ← Back to Posts
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Create New Post</h1>
      </div>

      <form action={createPost} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter post title"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your post content here..."
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="published"
            name="published"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
            Publish immediately
          </label>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Create Post
          </button>
          <Link
            href="/example"
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
} 