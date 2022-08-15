import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

const endpoints = {
  listItems: (offset = 1, limit = 10) =>
    `/pokemon/?offset=${offset * limit}&limit=${limit}`
}

export { api, endpoints }
