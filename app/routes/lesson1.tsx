import { Lesson1 } from '~/lesson1/lesson1'
import type { Route } from './+types/lesson1'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Lesson1Page() {
  return <Lesson1 />
}
