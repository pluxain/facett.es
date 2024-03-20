import { createWebHistory, createRouter } from "vue-router";
import { routes } from "./routes.ts";

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
});

export { router };
