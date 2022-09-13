import express from 'express'

const app = express()

app.get('/ads', (req, res) => {
  return res.json([
    { id: 1, name: 'ad1' },
    { id: 2, name: 'ad2' },
    { id: 3, name: 'ad3' },
    { id: 4, name: 'ad4' },
    { id: 5, name: 'ad5' }
  ])
})

app.listen(3333)
