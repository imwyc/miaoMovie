export default {
  path: '/movie',
  component: () => import('@/views/movie'),
  children: [
    {
      path: 'city',
      component: () => import('@/components/city')
    },
    {
      path: 'hotPlaying',
      component: () => import('@/components/hotPlaying')
    },
    {
      path: 'comingSoon',
      component: () => import('@/components/comingSoon')
    },
    {
      path: 'search',
      component: () => import('@/components/search')
    }
  ],
  redirect: '/movie/hotPlaying'
}

// {
//   path: '/movie',
//   redirect:'/hotPlaying'
// }
