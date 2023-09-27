import { paths } from '../constants'
import Layout from '../components/Layout'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import WeatherViewPage from '../pages/weather-view/WeatherViewPage'
import MapWeatherPage from '../pages/maps-weather/MapWeatherPage'
import Error404Page from '../pages/error404/Error404Page'

export const routes = [
  {
    path: paths.home(),
    exact: true,
    component: Home
  }, 

  {
    path: paths.login(),
    exact: true,
    component: Login
  }, 

  {
    component: Layout,
    path: paths.user.prefix(), 
    routes: [
      { exact: true, path: paths.user.weatherView(), component: WeatherViewPage }, 
      { exact: true, path: paths.user.mapWeather(), component: MapWeatherPage },
    ],
  },


  { path: '*', component: Error404Page },
]
