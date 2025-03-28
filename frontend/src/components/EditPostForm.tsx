import { useState } from "react";
import useEditPost from "../hooks/useEditPost";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Post } from "../hooks/useFetchPosts";
import { Button } from "@/components/ui/button"

const EditPostForm = ({post}: {post: Post}) => {
    const queryClient = useQueryClient()
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const {editPost} = useEditPost()
    const navigate = useNavigate()
    const postId = post.id
    const editPostMutation = useMutation({
        mutationFn: editPost,
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries({ queryKey: ['posts'] })
          queryClient.invalidateQueries({ queryKey: ['postById-' + postId] })
        },
      })

    return (
        <>
            <h2 className="font-display text-4xl text-neon-pink font-bold">Edit Post {postId}</h2>


            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={(e) => {
                     e.preventDefault(); editPostMutation.mutate({ postId, title, content }); 
                     /* redirect to /posts using tanstack router */
                    navigate({ to: '/posts' });

                    }
                }>

                    <div className="mb-5">
                        <label
                            htmlFor="title"
                            className="mb-3 block text-base font-medium "
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter your title"
                            value={title}
                            onChange={({ target: { value } }) => setTitle(value)}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-black font-medium  outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="content"
                            className="mb-3 block text-base font-medium "
                        >
                            Content
                        </label>
                        <textarea
                            value={content}
                            onChange={({ target: { value } }) => setContent(value)}
                            rows={5}
                            name="content"
                            id="content"
                            placeholder="Type your content"
                            className="text-black w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                    </div>
                    <div>
                        <Button
                            type="submit"
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white "
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>

        </>
    )
}

  
export default EditPostForm