const useEditPost = () => {
    const editPost = async ({ title, content, postId }: { title: string; content: string, postId: number }) => {

        const res = await fetch(`/api/v1/posts/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        })
        const data = await res.json()
        console.log(data)
    }
    return { editPost }
}
export default useEditPost