import { paths } from '../constants'
import Layout from '../components/Layout'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import WeatherViewPage from '../pages/weather-view/WeatherViewPage'
import Reserved from '../pages/reserved/Reserved'
import Error404Page from '../pages/error404/Error404Page'

export const routes = [
  {
    path: paths.home(), // /login
    exact: true,
    component: Home
  }, 
  {
    path: paths.login(), // /login
    exact: true,
    component: Login
  }, 



  // admin routes
  // {
  //   component: Layout,
  //   path: paths.admin.prefix(), // /admin
  //   routes: [
  //     { exact: true, path: paths.admin.users(), component: Users }, // /admin/users
  //     { exact: true, path: paths.admin.workplaces(), component: Workplaces }, // /admin/workplaces
  //   ],
  // },


  // user routes
  {
    component: Layout,
    path: paths.user.prefix(), // /profile
    routes: [
      { exact: true, path: paths.user.weatherView(), component: WeatherViewPage }, // /profile/plan
      { exact: true, path: paths.user.reservation(), component: Reserved }, // /profile/reservation
    ],
  },


  { path: '*', component: Error404Page },
]
