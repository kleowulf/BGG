const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
let baseUrl = "https://www.boardgamegeek.com/xmlapi/"
let user = "kleowulf"
let foo 
fetch(`${baseUrl}/collection/${user}?own=1`)
.then(res => res.text()) // parse response as JSON
.then(data => {
    foo = data
  console.log(data)
})
.catch(err => {
    console.log(`error ${err}`)
});

  res.send(foo)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})