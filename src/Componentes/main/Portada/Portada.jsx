import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import "./Portada.css";

const Portada = () => {
  return (
    <div className="portada-container">
      <div className="portada-content">
        <h1 className="title1">
          HACIENDO <br />
          CONEXIONES
        </h1>
        <span className="linea"></span>
        <h1 className="title2">
          LOGRANDO <br />
          RESULTADOS
        </h1>
        <div className="typewriter">
          <span
            style={{ fontWeight: "bold", color: "white", fontSize: "25px" }}
          >
            <Typewriter
              words={[
                "Posicionamos tu marca",
                "Te llevamos a lo mas alto",
                "Tu negocio crece",
              ]}
              loop={10000}
              typeSpeed={30}
              deleteSpeed={20}
            />
          </span>
          <Cursor />
        </div>
      </div>
    </div>
  );
};

export default Portada;
