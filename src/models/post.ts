import {knex} from '../lib/db'

export interface Post {
    id: number
    title: string
    content: string
}

const POSTS_TABLE = 'posts'
export const createPostsTable = () => {
    return knex.schema.createTable(POSTS_TABLE, (table) => {
        table.increments('id')
        table.string('title')
        table.string('content')
    })
}

export const getPost = (id: number): Promise<Post> => {
    return knex(POSTS_TABLE).select('*').where({id}).first()
}

export const getPosts = async (skip?: number, limit?: number) => {
    if (!limit) limit = 10
    if (limit > 100) limit = 100
    if (!skip) skip = 0
    const total = await knex(POSTS_TABLE).count()
    const posts = await knex(POSTS_TABLE).select('*').offset(skip).limit(limit)
    return {
        total: total[0]?.count,
        skip,
        limit,
        posts
    }
}

export const createPost = (title: string, content: string) => {
    return knex(POSTS_TABLE).insert({title, content}).returning('*')
}

export const deletePost = (id: number) => {
return knex.transaction(async (trx): Promise<Post> => {
        const post = await trx(POSTS_TABLE).select('*').where('id', id).first();
        await trx(POSTS_TABLE).delete().where('id', id);
        return post;
    });
}

export const updatePost = (id: number, title: string, content: string) => {
    return knex(POSTS_TABLE).update({title, content}).where('id', id).returning('*')
}