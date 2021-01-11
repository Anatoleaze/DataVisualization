import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/objets",
    name: "Objets",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "objets" */ "../views/Objets.vue")
  },
  {
    path: "/salaires",
    name: "Salaires",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "salaires" */ "../views/Salaires.vue")
  },
  {
    path: "/incidents",
    name: "Incidents",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "incidents" */ "../views/Incidents.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
