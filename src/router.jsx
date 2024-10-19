import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./Routes/About";
import Services from "./Routes/Services";
import Shop from "./Routes/Shop";
import Contact from "./Routes/Contact";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/shop", element: <Shop /> },
  { path: "/services", element: <Services /> },
  { path: "/contacts", element: <Contact /> },
]);
