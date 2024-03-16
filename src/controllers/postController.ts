import {
    createPost,
    deletePost,
    getPost,
    getPosts,
    updatePost,
  } from "../models/post";


export const getPostsController = async (req, res) => {
    const posts = await getPosts()
    res.status(200).json({
      status: 'success',
      data: {
        posts
      }
    })
  }


  export const getPostController = async (req, res) => {
    const { id } = req.params
    const post = await getPost(id)
    res.status(200).json({
      status: 'success',
      data: {
        post
      }
    })
  }


  export const createPostController = async (req, res) => {
    const { title, content } = req.body
    const post = await createPost(title, content)
    res.status(201).json({
      status: 'success',
      data: {
        post
      }
    })
  }


  export const updatePostController = async (req, res) => {
    const { id } = req.params
    const { title, content } = req.body
    const post = await updatePost(id, title, content)
    res.status(200).json({
      status: 'success',
      data: {
        post
      }
    })
  }


  export const deletePostController = async (req, res) => {
    const { id } = req.params
    const post = await deletePost(id)
    res.status(200).json({
      status: 'success',
      data: {
        post
      }
    })
  }

  