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
      <Footer />{" "}
      <div className="icon-whatsapp">
        <div className="images-icon-wpp">
          <a
            href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola,%20tengo%20una%20consulta!"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676929932/metrica/pngtree-whatsapp-phone-icon-png-image_6315989_ile6bc.png"
              alt="whatsapp"
              width={50}
              height={50}
            />
          </a>
        </div>

        <div className="action">
          <a
            href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola,%20tengo%20una%20consulta!"
            target="_blank"
            rel="noreferrer"
          >
            Contactanos
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
