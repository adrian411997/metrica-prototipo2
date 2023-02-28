import React, { useEffect, useState } from "react";
import Header from "../../../utilities/Header/Header";
import Footer from "../../../utilities/Footer/Footer";
import "./DiseñoGrafico.css";

const DiseñoGrafico = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="design-graphic-portada">
        <div className="diseño-intro">
          <h1>PRESENTATE A TUS CLIENTES CON UNA BUENA IMÁGEN</h1>
          <p>
            Una parte igual de importante que las demas, muchos aman los iconos
            o logos que transmite informacion mejorando la experiencia del
            cliente tras horas de leer contenido. Nosotros le daremos a tu
            empresa la imagen que se merece siguiendo sus lineamientos e
            ideales.
          </p>
        </div>
      </div>
      <div className="design-graphic-intro-content">
        <div className="design-graphic-intro-container">
          <div className="design-graphic-into-title">
            <h1 className="title-black">
              <div className="barra-black"></div>
              PORQUE ES IMPORTANTE EL DISEÑO?
            </h1>
          </div>
          <div className="design-graphic-intro-writting">
            <div className="design-text">
              <p>
                La imagen empresarial o corporativa es como se mostrará su
                empresa ante los demás.
              </p>
              <p>
                Un buen diseño facilitará que el público se identifique con la
                marca, reconociéndose en los valores, principios y filosofía de
                la empresa
              </p>
            </div>
            <div className="design-graphic-intro-images">
              <div className="photos-graphic">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677531485/metrica/chocaloteeeee-removebg-preview_xn0xfk.png"
                  alt=""
                  width={250}
                />
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677531512/metrica/entretre_logo_lineas_v2bnjw.png"
                  alt=""
                  width={250}
                />
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677531519/metrica/Recurso_3xxxhdpi_dtkltt.png"
                  alt=""
                  width={250}
                />
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677531526/metrica/PELUQUERIA_CANINA_zpx9oh.jpg"
                  alt=""
                  width={250}
                />
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677532011/metrica/EXTERIOR_klx4eo.jpg"
                  alt=""
                  width={250}
                />
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677531536/metrica/1ecologo_wrnf69.png"
                  alt=""
                  width={250}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="design-graphic-abarcamos">
        <div className="design-graphic-abarcamos-container">
          <div className="design-graphic-abarcamos-title">
            <h1 className="title-black">
              <div className="barra-black"></div>EN METRICA ABARCAMOS...
            </h1>
          </div>
          <div className="design-graphic-abarcamos-content">
            <div className="abarc-list">
              <li>Diseño de logo</li>
              <li>Imagen corporativa</li>
              <li>Diseño publicitario</li>
              <li>Ilustración e imagenes digitales</li>
              <li>Diseño de interiores y serialización</li>
              <li>Editorial</li>
              <li>Rebranding</li>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DiseñoGrafico;
