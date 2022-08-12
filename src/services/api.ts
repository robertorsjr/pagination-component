import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

const endpoints = {
  listItems: (offset = 20, limit = 20) => `/pokemon/?offset=${offset}&limit=${limit}`,
}

export { api, endpoints }
