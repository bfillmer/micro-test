
const axios = require('axios')

module.exports = async function (req, res) {
  const response = await axios('http://echo.jsontest.com/one/a/two/b')
  return response.data
}
