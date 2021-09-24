import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.view.vue'
import HouseDetails from '../views/HouseDetails.view.vue';
import CharacterDetails from '../views/CharacterDetails.view.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/house/:house_id',
    name: 'HouseDetails',
    component: HouseDetails,
    // props: true,
  },

  {
    path: '/character/:character_id',
    name: 'CharacterDetails',
    component: CharacterDetails,
    props: true,
    // props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
