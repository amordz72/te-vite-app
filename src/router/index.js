import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import PostView from "../views/PostView.vue";
import EazyCodeView from "../views/EazyCodeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/auth",
    name: "AuthView",
    component: AuthView,
  },
  {
    path: "/posts",
    name: "PostView",
    component: PostView,

    
  },
  {
    path: "/eazy",
    name: "EazyCodeView",
    component: EazyCodeView,
 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
