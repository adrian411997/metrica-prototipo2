import React from "react";
import Header from "../../../utilities/Header/Header";
import Footer from "../../../utilities/Footer/Footer";
import "./DiseñoGrafico.css";

const DiseñoGrafico = () => {
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
      <Footer />
    </>
  );
};

export default DiseñoGrafico;
