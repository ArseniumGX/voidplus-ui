import axios from 'axios'

axios.defaults.baseURL = 'https://voidplus-api.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'Application/json'
