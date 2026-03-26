import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('lesson1', 'routes/lesson1.tsx'),
] satisfies RouteConfig
