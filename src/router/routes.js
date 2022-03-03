const routes = [
  {
    path: "/",
    component: () => import("layouts/Main.vue"),
    children: [
      { path: "", component: () => import("src/pages/Dashboard.vue") },
      {
        path: "/database",
        component: () => import("src/pages/Database.vue"),
      },
      {
        path: "/device-manager",
        component: () => import("src/pages/DeviceManager.vue"),
      },
      {
        path: "/device-registration",
        component: () => import("src/pages/DeviceRegistration.vue"),
      },
      {
        path: "/device-settings",
        component: () => import("src/pages/DeviceSettings.vue"),
      },
      {
        path: "/list-network",
        component: () => import("../pages/AddChannelList"),
      },
      {
        path: "/spesial-building",
        component: () => import("../pages/SpecialBuilding.vue"),
      },
      {
        path: "/occupancy",
        component: () => import("../pages/Occupancy.vue"),
      },
      {
        path: "/occupancy-avaibility",
        component: () => import("../pages/OccupancyAvaibility.vue"),
      },
      {
        path: "/inventory-list",
        component: () => import("src/pages/InventoryList.vue"),
      },
      {
        path: "/inventory-avaibility",
        component: () => import("../pages/InventoryAvaibility.vue"),
      },
      {
        path: "/list-network-details",
        component: () => import("../pages/ListNetworkDetail.vue"),
      },
      {
        path: "/tes-api",
        component: () => import("../pages/TesApi.vue"),
      },
      {
        path: "/tes-form",
        component: () => import("../pages/TestForm.vue"),
      },
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
