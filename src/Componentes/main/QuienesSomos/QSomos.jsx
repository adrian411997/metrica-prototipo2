import React from "react";
import "./QSomos.css";

const QSomos = () => {
  return (
    <div className="qsomos-container">
      <div className="qsomos-content">
        <div className="title-qsomos-content">
          <h1 className="title-black">
            <div className="barra-black"></div>QUIENES SOMOS
          </h1>
        </div>
        <div className="content-qsomos">
          <p>
            ¡Bienvenido a Metrica, la empresa líder en marketing! En Metrica,
            nos enorgullece brindar soluciones de marketing de alta calidad a
            nuestros clientes para ayudarles a alcanzar sus objetivos
            comerciales y mejorar su presencia en línea. Nuestro equipo de
            expertos en marketing está altamente capacitado para crear
            estrategias de marketing efectivas que generen resultados tangibles
            y medibles para nuestros clientes.
          </p>
          <p>
            Desde la optimización del motor de búsqueda hasta la publicidad en
            redes sociales, la automatización de marketing y más, nuestra amplia
            gama de servicios se adapta a las necesidades individuales de
            nuestros clientes. Además, en Metrica nos mantenemos actualizados
            con las últimas tendencias y tecnologías en marketing para
            garantizar que nuestros clientes reciban las soluciones de marketing
            más innovadoras y efectivas.
          </p>
          <p>
            Si buscas una empresa de marketing confiable y profesional para
            llevar tus esfuerzos de marketing al siguiente nivel, no busques más
            allá de Metrica. Estamos comprometidos a ayudar a nuestros clientes
            a tener éxito y esperamos trabajar contigo.
          </p>
        </div>
        <div className="Buttons-qsomos">
          {" "}
          <button className="qsomos-buttons ">
            <a
              href="https://calendly.com/adrian-mart41197/30min"
              target={"_blank"}
              rel="noreferrer"
            >
              CONOZCA A NUESTRO EQUIPO
            </a>
          </button>{" "}
          <button className="qsomos-buttons ">
            <a
              href="https://calendly.com/adrian-mart41197/30min"
              target={"_blank"}
              rel="noreferrer"
            >
              CONOZCA COMO TRABAJAMOS
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QSomos;
