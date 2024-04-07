import { Link, createLazyFileRoute } from '@tanstack/react-router'
import useFetchPosts from '../../hooks/useFetchPosts'

export const Route = createLazyFileRoute('/posts/')({
  component: Posts,
})

function Posts() {
  const { posts } = useFetchPosts()
  return (
    <>      <h1 className="font-display text-4xl text-neon-pink font-bold">Posts </h1>
      {posts && posts?.sort((a, b) => b.id - a.id).map((post) => (
        <div key={post.id} className="card my-8">
          <h3 className="font-display text-2xl text-neon-pink font-bol">{post.title}</h3>
          <p>{post.content}</p>
          <Link to={`/posts/${post.id}`} className="mt-4 inline-block px-4 py-2 bg-neon-pink text-black border-black border-2 rounded ">Edit</Link>
        </div>
      ))}
    </>
  )
}

