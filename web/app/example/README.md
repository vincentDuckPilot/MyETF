# MyETF - Prisma + Next.js Example

This is a simple blog application demonstrating how to use Prisma ORM with Next.js App Router.

## Features

### Server-Side Features
- **Server Components**: Direct database queries in React components
- **Server Actions**: Form handling with database operations
- **Dynamic Routes**: Individual post pages with dynamic routing
- **Database Integration**: Full CRUD operations with Prisma

### API Features
- **REST API**: Complete REST endpoints for posts
- **Client-Side Fetching**: React hooks for API calls
- **Error Handling**: Proper error responses and loading states
- **Type Safety**: Full TypeScript support

## Pages

1. **`/example`** - Main posts listing page
2. **`/example/new`** - Create new post form
3. **`/example/[id]`** - View individual post
4. **`/example/[id]/edit`** - Edit existing post
5. **`/example/api-demo`** - Client-side API demo

## API Endpoints

- `GET /api/posts` - Fetch all posts
- `POST /api/posts` - Create new post
- `GET /api/posts/[id]` - Fetch single post
- `PUT /api/posts/[id]` - Update post
- `DELETE /api/posts/[id]` - Delete post

## Database Schema

The application uses a simple blog schema with:
- **User**: id, email, name
- **Post**: id, title, content, published, authorId

## Getting Started

1. Make sure your database is set up and seeded
2. Run the development server: `npm run dev`
3. Navigate to `http://localhost:3000/example`

## Key Files

- `lib/prisma.ts` - Prisma client configuration
- `app/example/page.tsx` - Main posts listing
- `app/example/new/page.tsx` - Create post form
- `app/example/[id]/page.tsx` - View post
- `app/example/[id]/edit/page.tsx` - Edit post
- `app/example/api-demo/page.tsx` - API demo
- `app/api/posts/route.ts` - Posts API endpoints
- `app/api/posts/[id]/route.ts` - Individual post API endpoints

## Technologies Used

- **Next.js 15** - React framework with App Router
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Database
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling 