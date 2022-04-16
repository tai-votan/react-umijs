export default [
  {
    path: "/",
    title: "site.title",
    component: "@/layouts/main",
    routes: [
      {
        path: "/",
        title: "site.title",
        component: "@/pages/home",
      },
      {
        title: "404",
        component: "@/pages/404",
      },
    ],
  },
  {
    path: "**",
    component: "@/pages/404",
  },
];
