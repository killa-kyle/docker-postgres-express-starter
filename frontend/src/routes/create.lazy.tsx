import { createLazyFileRoute } from '@tanstack/react-router'
import CreatePostForm from '../components/CreatePostForm'

export const Route = createLazyFileRoute('/create')({
  component: CreatePostForm,
})
