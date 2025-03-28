import { useQuery } from "@tanstack/react-query"

export type SinglePostResponse = {
    total: number
    skip: number
    limit: number
    post: Post
  }
  export type Post = {
    id: number
    title: string
    content: string
  }


const useFetchPostById = ({postId}: {postId: number}) => {
    const fetchPostById = async () => {
        const res = await fetch('/api/v1/posts/'+postId)
        const data: SinglePostResponse = await res.json()
        return data.post
    }


  const { data: post } = useQuery({ queryKey: ['postById-' + postId], queryFn: fetchPostById })


  return { post }

}

export default useFetchPostById