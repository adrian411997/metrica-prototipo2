import React, { useEffect, useState } from "react";
import Header from "../../../utilities/Header/Header";
import Footer from "../../../utilities/Footer/Footer";
import "./Marketing.css";
import publicidad from "../../../images/publi.png";
import GestionMarketin from "../../Gestion/GestionMarketin";

const PlanesMarketing = () => {
  const [showMetricaBasic, setShowMetricaBasic] = useState("");
  const [showMetricaBasic2, setShowMetricaBasic2] = useState("");
  const showPlanBasic = () => {
    if (showMetricaBasic === "") {
      setShowMetricaBasic("i-not-hiding");
    } else {
      setShowMetricaBasic("");
    }
  };
  const showPlanBasic2 = () => {
    if (showMetricaBasic2 === "") {
      setShowMetricaBasic2("i-not-hiding2");
    } else {
      setShowMetricaBasic2("");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="planes-container">
        <div className="marketing-content">
          <div className="planes-container-title">
            <div className="planes-container-title-content">
              <h1> Se relevante, indispensable y sobre todo presente</h1>
              <p>
                En tiempos actuales, las redes sociales componen una gran parte
                de nuestras vidas plagado de contenido y anuncios. Le daremos a
                tu empresa el reconocimiento que se merece con multiples
                estrategias para que resaltes de entre todos los demás.
              </p>
            </div>
          </div>
          <div className="planes-marketing-explain">
            <div className="planes-marketing-explain-title">
              <h1 className="title-black">
                <b>P</b> ORQUE MARKETING?
              </h1>
            </div>
            <div className="planes-marketing-explain-content">
              <div className="explain">
                <p>
                  Puedes tener el mejor contenido para ofrecer, el mejor
                  servicio para brindar e ideas de expansion, pero todo puede
                  complicarse si no tienes visibilidad en redes sociales o no
                  puedes lograr que tu mensaje llegue a tus clientes. Ahi es
                  donde entramos nosotros, para ayudarte a tener presencia y que
                  tu negocio avance.
                </p>
              </div>
              <div className="explain-photo">
                <div className="photos-design">
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677012082/metrica/Mockap_a2ec6v.png"
                    alt=""
                    width={250}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677012081/metrica/reeels_genxhf.png"
                    alt=""
                    width={250}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677012081/metrica/mackk_wsvc7j.png"
                    alt=""
                    width={250}
                  />
                </div>
              </div>
            </div>
          </div>
          <GestionMarketin />
          <div className="planes-marketing-title">
            <h1 className="title-black">
              <b>M</b>arketing Digital y Social Media
            </h1>
          </div>
          <div className="planes-marketing-columns">
            <div className="marketing-columns">
              <div className="marketing-column-image">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1675277740/metrica/Metrica_Basico_kqoaik.png"
                  width={150}
                  height={150}
                  alt="socialMedia"
                />
              </div>
              <div className="marketing-column-title">
                <h3>Metrica Basic</h3>
                <p>Estrategia ideal para potenciar tu marca</p>
              </div>

              <div className="marketing-column-services-container">
                <div className="marketin-column-services">
                  <ul>
                    <li>
                      <b>2 publicaciones semanales</b>
                    </li>
                    <li>2 Historias por post</li>
                    <li>Diseño incluido</li>
                    <div className={`im-hiding ${showMetricaBasic}`}>
                      <li>Produccion fotografica</li>
                      <li>Edicion de Video</li>
                      <li>Estrategias de Crecimiento</li>
                      <li>Programacion Mensual</li>
                      <li>Reunion con tu manager</li>
                    </div>
                  </ul>
                </div>
                <div className="button-show-more">
                  <button className="show-more-button" onClick={showPlanBasic}>
                    {showMetricaBasic === "" ? "VER MAS" : "VER MENOS"}
                  </button>
                </div>
              </div>
              <div className="marketin-column-button">
                <a
                  href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola,%20quiero%20el%20plan%20Metrica%20Basico!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Me decidí </button>
                </a>
              </div>
            </div>
            <div className="marketing-columns">
              <div className="marketing-column-image">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1675277740/metrica/Metrica_Pro_qx2si8.png"
                  width={150}
                  height={150}
                  alt="socialMedia"
                />
              </div>
              <div className="marketing-column-title2">
                <h3>Metrica PRO</h3>
                <p>
                  Contenido estrategico para llevar al siguiente nivel tu
                  empresa
                </p>
              </div>
              <div className="marketing-column-services-container">
                <div className="marketin-column-services">
                  <ul>
                    <li>
                      <b>3 publicaciones semanales</b>
                    </li>
                    <li>3 Historias por post</li>
                    <li>Estrategias de Crecimiento</li>
                    <div className={`im-hiding ${showMetricaBasic2}`}>
                      <li>
                        Diseño incluido/Produccion fotografica/Edicion de Video
                      </li>
                      <li>Pautas no incluídas</li>
                      <li>
                        Publicidad en Redes – Lanzamiento de campañas pagas y
                        posicionamiento
                      </li>
                      <li>Programacion Mensual</li>
                      <li>Reportes mensuales</li>
                      <li>Reunion con tu manager</li>
                    </div>
                  </ul>
                </div>
                <div className="button-show-more">
                  <button className="show-more-button" onClick={showPlanBasic2}>
                    {" "}
                    {showMetricaBasic2 === "" ? "VER MAS" : "VER MENOS"}
                  </button>
                </div>
              </div>
              <div className="marketin-column-button">
                <a
                  href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola,%20quiero%20el%20plan%20Metrica%20Pro!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Me decidí </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="socialmedia-planes">
          <div className="socialmedia-container-title">
            <h1 className="title-black">
              <b>P</b>ublicidad en Redes Sociales
            </h1>
          </div>
          <div className="planes-marketing-columns">
            <div className="socialmedia-columns">
              <div className="marketing-column-image">
                <img
                  src={publicidad}
                  width={150}
                  height={150}
                  alt="socialMedia"
                />
              </div>
              <div className="marketing-column-title">
                <h3>Meta Business</h3>
                <p>Estrategia Digital Publicitaria</p>
              </div>

              <div className="marketing-column-services-container">
                <div className="marketin-column-services">
                  <ul>
                    <li>
                      <b>Facebook e Instagram ADS</b>
                    </li>
                    <li>Estrategias de campaña</li>
                    <li>Reportes mensuales o semanales</li>
                    <li>Diseño Grafico y Social Design</li>
                    <li>Pauta no incluida</li>
                  </ul>
                </div>
              </div>
              <div className="marketin-column-button">
                <a
                  href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola,%20quiero%20el%20plan%20Social%20Media!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Me decidí</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-whatsapp">
          <div className="images-icon-wpp">
            <a
              href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola,%20tengo%20una%20consulta!"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1674868793/metrica/wpp_xmmgba.png"
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
      </div>
      <Footer />
    </>
  );
};
export default PlanesMarketing;
