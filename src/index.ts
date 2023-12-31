import express from 'express'
import cors from 'cors'
import logger from 'morgan'

//routes
import streanRouter from './moduls/stream/stream.controller'

const app = express()
app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/stream', streanRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('Start')
    console.log(`http://localhost:${PORT}`)
})