const PORT = 3000
const express = require('express')
const apiRouter = require('./routes/api')

const path = require('path')

const app = express()

app.use('/api', apiRouter)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT)
})
