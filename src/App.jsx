import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "@/router";

const App = () => {
  // const token = sessionStorage.getItem("codemalou-token");
  // if (window.location.pathname === "/login" && token) {
  //   window.open("/", '_self')
  // }
  // if (window.location.pathname !== "/login" && !token) {
  //   window.open("/login", '_self')
  // }
  return <RouterProvider router={router} />
};

export default App;
