let baseUrl = "https://www.boardgamegeek.com/xmlapi/"
let user = "Klewoulf"

fetch(`${baseUrl}/collection/${user}?own=1`)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
})
.catch(err => {
    console.log(`error ${err}`)
});

