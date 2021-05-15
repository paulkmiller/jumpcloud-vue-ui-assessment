import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/users",
      name: "users",
      component: () => import("./../components/pages/UserIndex")
    },
    {
      path: "/users/:id",
      name: "user-details",
      component: () => import("./../components/pages/UserShow")
    },
    {
      path: "/test",
      name: "save",
      component: () => import("./../components/pages/UserSave")
    }
  ]
});