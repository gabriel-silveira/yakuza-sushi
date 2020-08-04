
const routes = [
  {
    path: '/',
    component: () => import('layouts/main-layout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/home.vue') },
      { path: 'cardapio/:categoryPath', name: 'cardapio', component: () => import('pages/cardapio.vue') },
      { path: 'localizacao', name: 'localizacao', component: () => import('pages/localizacao.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/error-404.vue')
  }
]

export default routes
