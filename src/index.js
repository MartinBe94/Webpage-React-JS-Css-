import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Sidebar from "./components/Sidebar";
import "./App.css";

const AppLayout = () => (
    <>
        <Sidebar/>
        <Outlet/>
    </>
);

// const router = createBrowserRouter(
//     createRoutesFromElements(
//     <Route element ={<AppLayout/>}>
//         <Route path="/home" element={<Home />} />
//         <Route path="/about"element={<About/>}/>
//         <Route path="/contact"element={<Contact/>}/>
//     </Route>

// )
// );

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
    
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "about",
            element: <About/>,
          },
          {
            path: "contact",
            element: <Contact/>,
          },
    ]
  },
    
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);