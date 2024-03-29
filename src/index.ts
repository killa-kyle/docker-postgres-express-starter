console.log("Hello, database!");

require('dotenv-extended').load()
import app from './server'

const PORT = process.env.PORT || 4000
const DATABASE_URL = process.env.DATABASE_URL

app.listen(PORT, () => {
  console.log('Server started at http://localhost:%d', PORT)
})

process.on('uncaughtException', function (err) {
  console.error('uncaughtException', err)
})

