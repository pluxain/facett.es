import { HomeView, ProfileView } from "@/views";
const routes = [
  { name: "home", path: "/", component: HomeView },
  { name: "show_profile", path: "/profile/:uuid", component: ProfileView },
];

export { routes };
