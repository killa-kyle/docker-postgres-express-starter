import { useState } from "react";
import useCreatePost from "../hooks/useCreatePost";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const CreatePostForm = () => {
    const queryClient = useQueryClient()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {createPost} = useCreatePost()

    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries({ queryKey: ['posts'] })
        },
      })

    return (
        <>
            <h2 className="font-display text-4xl text-neon-pink font-bold">Create Post</h2>


            <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={(e) => { e.preventDefault(); createPostMutation.mutate({ title, content }); setTitle(''); setContent(''); }}>

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
                        <button
                            type="submit"
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default CreatePostForm