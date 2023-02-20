import React from "react";
import Particle from "../Particles/Particle";
import Footer from "../utilities/Footer/Footer";
import Header from "../utilities/Header/Header";
import Portada from "./Portada/Portada";
import QSomos from "./QuienesSomos/QSomos";
import Reunion from "./Reunion/Reunion";
import Servicios from "./Servicio/Servicios";
const Home = () => {
  return (
    <>
      <Particle />
      <Header />
      <Portada />
      <Servicios />
      <QSomos />
      <Reunion />
      <Footer />
    </>
  );
};

export default Home;
