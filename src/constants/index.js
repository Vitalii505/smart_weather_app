export const paths = {
  home: () => '/',
  login: () => '/login',
  user: {
    prefix: () => '/profile',
    weatherView: () => getUserRoute('/weather-view'),
    mapWeather: () => getUserRoute('/maps-weather'),
  },
}

const getUserRoute = (route) => `/profile${route}`

export const userTabs = [
  {
    url: paths.user.weatherView(),
    title: 'Weather View',
  },
  {
    url: paths.user.mapWeather(),
    title: 'Maps Weather View'
  }
]