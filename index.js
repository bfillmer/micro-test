
const fetch = require('node-fetch')

module.exports = async function (req, res) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const json = await response.json()

  return json.example
}
