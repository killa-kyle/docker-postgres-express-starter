require('dotenv-extended').load()
import type { Knex } from "knex";


const config: { [key: string]: Knex.Config } = {
  // set knexfile for production
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    debug: true,
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: {
      directory: './seeds/dev',
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

export default config