fetch("https://boardgamegeek.com/xmlapi2/")
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
})
.catch(err => {
    console.log(`error ${err}`)
});