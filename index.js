const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.listen(port, () => {
  console.log('Start server at port 3000.')
})

app.use((req, res, next) => {
  let ALLOW_ORIGIN = ["*"]
  let ORIGIN = req.headers.origin
     if (ALLOW_ORIGIN.includes(ORIGIN)) {
       res.header('Access-Control-Allow-Origin', ORIGIN)
     }
     res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
     res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
     return next()
  })


