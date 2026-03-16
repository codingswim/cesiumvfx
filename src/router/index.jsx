import { createBrowserRouter, redirect } from "react-router-dom";

import Page404 from "@/modules/404";

import CesiumPage from "@/modules/cesium";
import Model from "@/modules/cesium/components/model";
import Snow from "@/modules/cesium/components/snow";
import Rain from "@/modules/cesium/components/rain";
import Fire from "@/modules/cesium/components/fire";
import Fog from "@/modules/cesium/components/fog";
import Draw from "@/modules/cesium/components/draw";
import Diffuse from "@/modules/cesium/components/diffuse";
import Radiant from "@/modules/cesium/components/radiant";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/cesium/model"),
    element: null,
  },
  {
    path: "/cesium/*",
    element: <CesiumPage />,
    children: [
      // 添加索引路由，访问 /cesium 时重定向到 /cesium/model
      {
        index: true,
        loader: () => redirect("/cesium/model"),
      },
      {
        path: "model",
        element: <Model />,
      },
      {
        path: "snow",
        element: <Snow />,
      },
      {
        path: "rain",
        element: <Rain />,
      },
      {
        path: "fire",
        element: <Fire />,
      },
      {
        path: "fog",
        element: <Fog />,
      },
      {
        path: "draw",
        element: <Draw />,
      },
      {
        path: "diffuse",
        element: <Diffuse />,
      },
      {
        path: "radiant",
        element: <Radiant />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
