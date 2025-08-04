import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

interface PostPageProps {
  params: {
    id: string
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
    include: {
      author: true,
    },
  })

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <Link 
          href="/example" 
          className="text-blue-500 hover:text-blue-600"
        >
          ← Back to Posts
        </Link>
      </div>

      <article className="bg-white rounded-lg shadow-sm border p-8">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>By: {post.author?.name || 'Unknown'}</span>
            <span>•</span>
            <span>Status: {post.published ? 'Published' : 'Draft'}</span>
            <span>•</span>
            <span>ID: {post.id}</span>
          </div>
        </header>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            {post.content || 'No content available'}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex gap-4">
            <Link
              href={`/example/${post.id}/edit`}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Edit Post
            </Link>
            <Link
              href="/example"
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md"
            >
              Back to List
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
} 