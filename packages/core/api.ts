import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'https://api.invirtual.com',
  withCredentials: true
})

export default api