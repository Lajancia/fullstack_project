import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: "Main",
      },
  },
  {
    path: '/about',
    name: 'About',
    meta: {
        title: "3D Object",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
        path: '/object1',
        name: 'Object1',
        meta: {
        title: "3D Object 1",
      },
        component: () => import('../views/object1.vue'),

    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})



export default router
