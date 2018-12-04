import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/trips"
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/trips",
      name: "TripsPage",
      component: () => import("./pages/TripsPage.vue")
    }
  ]
});
