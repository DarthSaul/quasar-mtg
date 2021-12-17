const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/login",
    component: () => import("layouts/Auth.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }],
  },
  {
    path: "/register",
    component: () => import("layouts/Auth.vue"),
    children: [{ path: "", component: () => import("pages/Register.vue") }],
  },
  {
    path: "/signout",
    component: () => import("layouts/Auth.vue"),
    children: [{ path: "", component: () => import("pages/Logout.vue") }],
  },
  {
    path: "/catalog",
    component: () => import("layouts/Catalog.vue"),
    children: [
      { path: "", component: () => import("pages/catalog/Index.vue") },
      { path: "cards", component: () => import("pages/catalog/Cards.vue") },
      { path: "sets", component: () => import("pages/catalog/Sets.vue") },
      { path: "types", component: () => import("pages/catalog/Types.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
