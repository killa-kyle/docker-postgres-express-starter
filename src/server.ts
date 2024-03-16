import express from 'express'
import helmet from 'helmet'

// routes
import routes from './routes'

// core
const app = express()
app.use(helmet())
// prefix all nested routes with /api/v1


app.use(express.urlencoded({extended: false}))
app.use(express.json({limit: '1mb'}))

// routes
routes(app)


export default app