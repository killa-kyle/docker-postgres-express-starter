import knexClient from '../lib/db'

const POSTS_TABLE = 'posts'
export const createPostsTable = () => {
    return knexClient.schema.createTable(POSTS_TABLE, (table) => {
        table.increments('id')
        table.string('title')
        table.string('content')
    })
}

export const getPost = (id: number) => {
    return knexClient(POSTS_TABLE).select('*').where('id', id).first()
}

export const getPosts = () => {
    return knexClient(POSTS_TABLE).select('*')
}

export const createPost = (title: string, content: string) => {
    return knexClient(POSTS_TABLE).insert({title, content}).returning('*')
}

export const deletePost = (id: number) => {
    return knexClient(POSTS_TABLE).delete().where('id', id).returning('*')
}

export const updatePost = (id: number, title: string, content: string) => {
    return knexClient(POSTS_TABLE).update({title, content}).where('id', id).returning('*')
}