import { createLazyFileRoute } from '@tanstack/react-router'
import EditPostForm from '../../components/EditPostForm'
import useFetchPostById from '../../hooks/useFetchPostById'


const EditPost = () => {
    const { postId } = Route.useParams()
    const {post} = useFetchPostById({postId: Number(postId)})
    return <div>
        EditPost {postId} 
    {post && <EditPostForm post={post} />}
    </div>
}


export const Route = createLazyFileRoute('/posts/$postId')({
    component: EditPost
})


