import React, { useState, useEffect } from "react";
import "./Servicios.css";

const Servicios = () => {
  const [hide, setHide] = useState("hide");
  const hideOrNotHide = () => {
    if (document.documentElement.scrollTop > 150) {
      setHide("servicio-content");
    } else {
      setHide("hide");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", hideOrNotHide);
  });
  return (
    <div className="servicio-container">
      <div className={`${hide}`}>
        <div className="title-servicio-content">
          <h1>
            <b>N</b>uestros servicios
          </h1>
        </div>
        <div className="card-services-container">
          <div className="card-service-list">
            <div className={`service-card`}>
              <div className="background1 marketing"></div>
              <div className="content-card-service">
                <div className="title-card">
                  <h2>¿Quieres vender por Facebook y demas redes sociales?</h2>
                </div>
                <div className="button-card-service">
                  <button>Conoce mas</button>
                </div>
              </div>
            </div>
            <div className={`service-card`}>
              <div className="background1 web"></div>
              <div className="content-card-service">
                <div className="title-card">
                  <h2>¿Estas en busqueda de tener tu sitio web profesional?</h2>
                </div>
                <div className="button-card-service">
                  <button>Conoce mas</button>
                </div>
              </div>
            </div>
            <div className={`service-card`}>
              <div className="background1 graphic"></div>
              <div className="content-card-service">
                <div className="title-card">
                  <h2>
                    ¿Necesitas una identidad corporativa para que te reconozcan
                    facilmente?
                  </h2>
                </div>
                <div className="button-card-service">
                  <button>Conoce mas</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
