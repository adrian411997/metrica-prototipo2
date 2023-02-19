import React from "react";
import Particle from "../Particles/Particle";
import Header from "../utilities/Header/Header";
import Portada from "./Portada/Portada";
import QSomos from "./QuienesSomos/QSomos";
import Servicios from "./Servicio/Servicios";
const Home = () => {
  return (
    <>
      <Particle />
      <Header />
      <Portada />
      <Servicios />
      <QSomos />
    </>
  );
};

export default Home;
