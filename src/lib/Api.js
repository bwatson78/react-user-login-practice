var axios = require('axios')

let apiHost = 'http://' + (process.env.API_HOST || 'localhost') + ':3001'

module.exports = {
  authenticateUser: function(email, password) {
    let data = {
      auth: {
        email: email,
        password: password
      }
    }
    return axios.post(apiHost + '/user_token', data)
      .then(function (response) {
        return response.data.jwt
      })
      .catch(function (error) {
        return undefined
      })
  },
  getCurrentUser: function(jwt) {
    var config = {
      headers: {}
    }
    if (jwt) {
      config['headers']['Authorization'] = 'Bearer ' + jwt
    }
    return axios.get(apiHost + '/users/current', config)
      .then(function(response){
        return response.data
      })
      .catch(function (error) {
        return undefined
      })
  },
  getPages: function() {
    return axios.get(apiHost + '/pages')
      .then(function(response){
        return response.data
      })
      .catch(function (error) {
        return undefined
      })
  },
  getPage: function(jwt, id) {
    var config = {
      headers: {}
    }
    if (jwt) {
      config['headers']['Authorization'] = 'Bearer ' + jwt
    }
    return axios.get(apiHost + '/pages/' + id, config)
      .then(function(response){
        return response.data
      })
      .catch(function (error) {
        return undefined
      })
  }
}