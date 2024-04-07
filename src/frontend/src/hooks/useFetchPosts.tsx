import { useQuery } from "@tanstack/react-query"

export type PostResponse = {
    total: number
    skip: number
    limit: number
    posts: Post[]
  }
  export type Post = {
    id: number
    title: string
    content: string
  }


const useFetchPosts = () => {
    const fetchPosts = async () => {
        const res = await fetch('/api/v1/posts?skip=0&limit=100')
        const data: PostResponse = await res.json()
        return data.posts
    }


  const { data: posts } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts })


  return { posts }

}

export default useFetchPosts