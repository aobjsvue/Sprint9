import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/brands/:brand',
    name: 'brand',
    component: () => import('../views/BrandProductsView.vue'),
    props: true
  },
  {
    path: '/product_type/:type',
    name: 'product_type',
    component: () => import('../views/TypeProductsView.vue'),
    props: true
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductView.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      if (store.state.logged === false) {
        next(false);
        store.commit("toggleLoginModal");
      } else {
        next();
      }
    },
  },
  {
    path: '/my_favorites',
    name: 'myfavorites',
    component: () => import('../views/MyFavoritesView.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      if (store.state.logged === false) {
        next(false);
        store.commit("toggleLoginModal");
      } else {
        next();
      }
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router