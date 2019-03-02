import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://swapi.co/api'
})

export default axiosInstance