import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github, { gitInfoLoader } from "./components/Github/Github.jsx";
import User from "./components/User/Users.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "github",
//         element: <Github />,
//       },
//     ],
//   },
// ]);

// Method - 2 for creating a Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} loader={gitInfoLoader} />
      <Route path="user/:id" element={<User />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
