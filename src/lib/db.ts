import Knex from "knex";
import config from "../../knexfile";

export const knex = Knex(config);

export const closeAll = async () => {
    await knex.destroy()
}
console.log('Database connected!', process.env.NODE_ENV)