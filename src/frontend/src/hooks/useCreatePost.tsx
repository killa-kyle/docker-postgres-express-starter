const useCreatePost = () => {
    const createPost = async ({ title, content }: { title: string; content: string }) => {
        const res = await fetch('/api/v1/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        })
        const data = await res.json()
        console.log(data)
    }
    return { createPost }
}
export default useCreatePost