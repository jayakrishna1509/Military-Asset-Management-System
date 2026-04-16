import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3000'
})

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token')
  if (token) {
    req.headers = req.headers || {}
    // Store token as-is, but send in standard Authorization format.
    req.headers.Authorization = token.startsWith('Bearer ')
      ? token
      : `Bearer ${token}`
  }
  return req
})

export default API