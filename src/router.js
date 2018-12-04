import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/trips"
    },
    {
      path: "/trips",
      name: "TripsPage",
      component: () => import("./pages/TripsPage.vue")
    }
  ]
});
