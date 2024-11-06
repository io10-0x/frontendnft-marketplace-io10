import React, { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SellNft from "./pages/SellNft";
import MainLayout from "./layout/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/sellnft" element={<SellNft />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
