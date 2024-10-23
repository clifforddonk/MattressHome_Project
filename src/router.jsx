import { createBrowserRouter } from "react-router-dom";
import About from "./Routes/About";
import Services from "./Routes/Services";
import Shop from "./Routes/Shop";
import Contact from "./Routes/Contact";
import HomePage from "./Routes/HomePage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <About /> },
  { path: "/shop", element: <Shop /> },
  { path: "/services", element: <Services /> },
  { path: "/contacts", element: <Contact /> },
]);
