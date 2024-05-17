import React from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/home/index";
import Section1 from "./components/Home/nested/Section1";
import Section2 from "./components/Home/nested/Section2";
import Section3 from "./components/Home/nested/Section3";
import Section4 from "./components/Home/nested/Section4";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/courses" element={<Homepage />}>
            <Route index element={<Navigate to="design" />} />
            <Route path="design" element={<Section1 />} />
            <Route path="html" element={<Section2 />} />
            <Route path="css" element={<Section3 />} />
            <Route path="javascript" element={<Section4 />} />
          </Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
