import "./App.css";
import Home from "./Componentes/main/Home";
import NuestroEquipo from "./Componentes/main/NuestroEquipo/NuestroEquipo";
import { createBrowserRouter } from "react-router-dom";

export const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/equipo",
    element: <NuestroEquipo />,
  },
]);
