import ROUTES from "./routes.const";

const route404 = [
  {
    title: "404",
    component: "@/pages/404",
  },
];

export default [
  {
    component: "@/layouts/main",
    path: ROUTES.index,
    routes: [
      {
        path: ROUTES.index,
        title: "site.title",
        component: "@/pages/home",
      },
      {
        routes: [
          {
            path: ROUTES.login,
            title: "site.login",
            component: "@/pages/login",
          },
          ...route404,
        ],
        ...route404,
      },
      ...route404,
    ],
  },
  ...route404,
];
