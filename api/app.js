require('dotenv').config({})
const express = require('express')
const cors = require('cors')
const router = require('./router')

const PORT = process.env.PORT ?? 3001
const CLIENT_PATH = __dirname.split('api')[0] + 'app/dist'
const isProduction = process.env.NODE_ENV === 'production'
const app = express()

app.use(express.json())
app.use(cors())

if (isProduction) {
  app.use(express.static(CLIENT_PATH))
}

app.use('/api', router)

if (isProduction) {
  app.get('*', (_req, res) => {
    res.sendFile(CLIENT_PATH + '/index.html')
  })
}

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
})
