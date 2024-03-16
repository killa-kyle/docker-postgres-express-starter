import knex from "knex";
import config from "./knexfile";
const knexClient = knex(config);

console.log('Database connected!', process.env.NODE_ENV)
export default knexClient