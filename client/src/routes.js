import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
import Home from "./components/dashboard/Dashboard.vue";

export const routes = [
  { path: "/login", name: "", component: Login },
  { path: "/register", name: "", component: Register },
  {
    path: "/dashboard",
    name: "Home",
    component: Home
  },
  { path: "*", redirect: "/login" }
];
