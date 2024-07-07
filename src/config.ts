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

  return api
}
