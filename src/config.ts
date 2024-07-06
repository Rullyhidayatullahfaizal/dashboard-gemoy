import axios from 'axios'
import { useCookies } from 'react-cookie'
import Router from 'next/router'

export const containerMaxW = 'xl:max-w-6xl xl:mx-auto'

export const appTitle = 'Free Tailwind 3 React Next Typescript dashboard template'

export const getPageTitle = (currentPageTitle: string) => `${currentPageTitle} — ${appTitle}`

export const useAxios = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'refreshToken'])

  const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: `Bearer ${cookies.token}`
    }
  })

  api.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        try {
          const { data } = await axios.get('http://localhost:5000/admin-token', {
            params: {
              refreshToken: cookies.refreshToken
            }
          })
          setCookie('token', data.accessToken, { path: '/' })
          api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`
          originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`
          return api(originalRequest)
        } catch (err) {
          console.error('Refresh token failed', err)
          removeCookie('token', { path: '/' })
          removeCookie('refreshToken', { path: '/' })
          Router.push('/login')
        }
      }
      return Promise.reject(error)
    }
  )

  return api
}
