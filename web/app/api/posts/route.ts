import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
      orderBy: {
        id: 'desc',
      },
    })
    
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, content, published = false } = body
    
    // Get the first user as author (for simplicity)
    const user = await prisma.user.findFirst()
    
    if (!user) {
      return NextResponse.json(
        { error: 'No user found' },
        { status: 400 }
      )
    }
    
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId: user.id,
      },
      include: {
        author: true,
      },
    })
    
    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
} 