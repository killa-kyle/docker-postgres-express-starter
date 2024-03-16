import knexClient from '../lib/db'

export interface Post {
    id: number
    title: string
    content: string
}

const POSTS_TABLE = 'posts'
export const createPostsTable = () => {
    return knexClient.schema.createTable(POSTS_TABLE, (table) => {
        table.increments('id')
        table.string('title')
        table.string('content')
    })
}

export const getPost = (id: number): Promise<Post> => {
    return knexClient(POSTS_TABLE).select('*').where('id', id).first()
}

export const getPosts = (): Promise<Post[]> => {
    return knexClient(POSTS_TABLE).select('*')
}

export const createPost = (title: string, content: string) => {
    return knexClient(POSTS_TABLE).insert({title, content}).returning('*')
}

export const deletePost = (id: number) => {
return knexClient.transaction(async (trx): Promise<Post> => {
        const post = await trx(POSTS_TABLE).select('*').where('id', id).first();
        await trx(POSTS_TABLE).delete().where('id', id);
        return post;
    });
}

export const updatePost = (id: number, title: string, content: string) => {
    return knexClient(POSTS_TABLE).update({title, content}).where('id', id).returning('*')
}