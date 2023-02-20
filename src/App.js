import "./App.css";
import Home from "./Componentes/main/Home";
import NuestroEquipo from "./Componentes/main/NuestroEquipo/NuestroEquipo";
import { createBrowserRouter } from "react-router-dom";
import PlanesMarketing from "./Componentes/main/planes/Marketing/PlanesMarketing";
import SitiosWeb from "./Componentes/main/planes/SitiosWeb/SitiosWeb";

export const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/equipo",
    element: <NuestroEquipo />,
  },
  { path: "/marketing", element: <PlanesMarketing /> },
  { path: "/sitiosweb", element: <SitiosWeb /> },
]);
