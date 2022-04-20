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
        redirect: `${ROUTES.product}/comment`,
      },
      {
        path: "/login",
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
      {
        path: "/c",
        routes: [
          {
            path: "/c/:campaign",
            title: "site.campaign",
            component: "@/pages/campaign",
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
