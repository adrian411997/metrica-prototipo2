import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <h1 className="title-white">
            <div className="barra-white"></div>Nuestros servicios
          </h1>
        </div>
        <div className="card-services-container">
          {/*           <div className="card-service-list">
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
          </div>*/}
          <div className="card-service">
            <div className="bar"></div>
            <div className="title-card">
              <h1>Marketing</h1>
            </div>
            <div className="content">
              <p>
                Posicionamos de manera estrategica tu negocio. A traves de la
                creacion de contenido en redes sociales, logramos el alcance que
                necesitas.
              </p>
            </div>
            <div className="button-card">
              <button>
                <Link>Conocer mas</Link>
              </button>
            </div>
          </div>
          <div className="card-service">
            <div className="bar"></div>
            <div className="title-card">
              <h1>Desarrollo Web</h1>
            </div>
            <div className="content">
              <p>
                Tu marca con dominio propio para estar presente en la red. Una
                gestión adaptada a tu negocio. Todo lo necesario para que
                obtengas un sitio web de excelencia
              </p>
            </div>
            <div className="button-card">
              <button>
                <Link>Conocer mas</Link>
              </button>
            </div>
          </div>
          <div className="card-service">
            <div className="bar"></div>
            <div className="title-card">
              <h1>DISEÑO GRÁFICO</h1>
            </div>
            <div className="content">
              <p>
                Desarrollamos diferentes estrategias para conseguir una
                comunicación visual adaptada a las necesidades de tu marca.
              </p>
            </div>
            <div className="button-card">
              <button>
                <Link>Conocer mas</Link>
              </button>
            </div>
          </div>
          <div className="card-service">
            <div className="bar"></div>
            <div className="title-card">
              <h1>PUBLICIDAD DIGITAL</h1>
            </div>
            <div className="content">
              <p>
                Un desarrollo hiperdirecto de llegar a la audiencia que deseas
                en redes sociales. Logrando resultados reales maximizando tus
                gastos.
              </p>
            </div>
            <div className="button-card">
              <button>
                <Link>Conocer mas</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
