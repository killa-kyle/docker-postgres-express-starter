require('dotenv-extended').load()

const config = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  },
  seeds: {
    directory: './seeds/dev',
  },
}

export default config