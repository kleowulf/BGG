let baseUrl = "https://www.boardgamegeek.com/xmlapi/"
let user = "Klewoulf"

// fetch(`${baseUrl}/collection/${user}?own=1`)
// .then(res => res.json()) // parse response as JSON
// .then(data => {
//   console.log(data)
// })
// .catch(err => {
//     console.log(`error ${err}`)
// });

fetch(`${baseUrl}/collection/${user}?own=1`, {
  mode:  'cors',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    key1: 'value1',
    key2: 'value2'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));