import express from 'express'
import helmet from 'helmet'

import routes from './routes'

// core
const app = express()
app.use(helmet())

app.use(express.urlencoded({extended: false}))
app.use(express.json({limit: '1mb'}))

// routes
routes(app)


export default app