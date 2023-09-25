export const paths = {
  home: () => '/',
  login: () => '/login',
  user: {
    prefix: () => '/profile',
    weatherView: () => getUserRoute('/weather-view'),
    reservation: () => getUserRoute('/reservation'),
  },
}

const getUserRoute = (route) => `/profile${route}`

export const userTabs = [
  {
    url: paths.user.weatherView(),
    title: 'Weather View',
  },
  {
    url: paths.user.reservation(),
    title: 'Reserved'
  }
]