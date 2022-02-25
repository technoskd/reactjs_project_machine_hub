var axios = require('axios')
export const fetchData = async (endpoint, args = {}, method = 'get') => {
  var config = {
    method: method,
    url: `https://www.machinehubasia.com/api/wp-json/${endpoint}`,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  if (method === 'post' || method === 'put') {
    config.data = args
  }
  return await axios(config)
    .then(function (response) {
      response.data.error = response.data.error ? response.data.error : false
      // console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      return {
        error: true,
        message: error.message,
      }
    })
}

