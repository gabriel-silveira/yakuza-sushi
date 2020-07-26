
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/home.vue') },
      { path: 'cardapio', name: 'cardapio', component: () => import('pages/cardapio.vue') },
      { path: 'delivery', name: 'delivery', component: () => import('pages/delivery.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/error-404.vue')
  }
]

export default routes
