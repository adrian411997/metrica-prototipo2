import React, { useEffect, useState } from "react";
import Header from "../../../utilities/Header/Header";
import Footer from "../../../utilities/Footer/Footer";
import GestionWeb from "../../Gestion/GestionWeb";
import "./SitiosWeb.css";

const SitiosWeb = () => {
  const [showEmprender, setShowEmprender] = useState("");
  const [showNegocio, setShowNegocio] = useState("");
  const [showTienda, setShowTienda] = useState("");
  const showPlanEmprender = () => {
    if (showEmprender === "") {
      setShowEmprender("web-hiding");
    } else {
      setShowEmprender("");
    }
  };
  const showPlanNegocio = () => {
    if (showNegocio === "") {
      setShowNegocio("web-hiding");
    } else {
      setShowNegocio("");
    }
  };
  const showPlanTienda = () => {
    if (showTienda === "") {
      setShowTienda("web-hiding");
    } else {
      setShowTienda("");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="site-web-desc">
        <div className="site-web-portrait">
          <div className="site-web-title">
            <h1>Tu pagina es como tu hogar</h1>
            <p>
              Tener una pagina web no es simplemente textos y numeros, a
              diferencia de las redes sociales donde compartes tu espacio y
              compites por la atencion de los usuarios, tu pagina esta centrada
              todo en ti y en lo que quieres transmitir u ofrecer. Puedes darle
              el estilo que quieras al fin y al cabo, es tuya y nosotros te
              ayudaremos a quede tan bien como lo desees
            </p>
          </div>
        </div>
        <GestionWeb />
        <div className="element-content">
          <div className="title-web-part-content">
            <h1 className="title-white">
              <div className="barra-white"></div>LO QUE TE OFRECEREMOS
            </h1>
          </div>
          <div className="elements">
            <div className="element first">
              <img
                src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677190599/metrica/responsive-design_a0gnto.png"
                alt=""
                width={100}
                height={100}
              />
              <h3>100% Responsive</h3>
              <div>
                Se ajusta perfecto tanto a un monitor y una laptop, como a una
                tablet y un celular.
              </div>
            </div>
            <div className="element second">
              <img
                src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677190599/metrica/dise%C3%B1o_elegante_f8kmiz.png"
                alt=""
                width={100}
                height={100}
              />
              <h3>Diseño elegante y profesional </h3>
              <div>
                Destacar de la competencia implica hacer la diferencia y
                nosotros lo hacemos mejor que nadie.
              </div>
            </div>
            <div className="element third">
              <img
                src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677191114/metrica/crecer_2_yrvqjn.png"
                alt=""
                width={100}
                height={100}
              />
              <h3>Crece sin limites</h3>
              <div>
                Puedes elegir entre mas de 80 caracteristicas adicionales para
                añadir a tu Sitio Web.
              </div>
            </div>
            <div className="element fourth">
              <img
                src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677190600/metrica/consulta_cbbpuc.png"
                alt=""
                width={100}
                height={100}
              />
              <h3>Recibe consultas</h3>
              <div>
                Tu Sitio Web contara con un formulario para que se pongan en
                contacto contigo asi estaras mas cerca de tus clientes.
              </div>
            </div>
            <div className="element fifth">
              <img
                src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677190599/metrica/galeria-de-imagenes_pfvia2.png"
                alt=""
                width={100}
                height={100}
              />
              <h3>Banco de imagenes</h3>
              <div>
                Trabajamos con nuestro propio banco de material fotografico con
                derechos de autor.
              </div>
            </div>
            <div className="element sixth">
              <img
                src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677190599/metrica/location_azb5c1.png"
                alt="svg"
                width={100}
                height={100}
              />
              <h3>Google Maps</h3>
              <div>
                Ubicación de Google Maps insertada en el sitio con su ubicación
                física.
              </div>
            </div>
            <div className="element seventh">
              <img
                src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677190599/metrica/redes-sociales_ctei35.png"
                alt="asoci"
                width={100}
                height={100}
              />
              <h3>Asociación a tus redes sociales</h3>
              <div>
                Links a tu Facebook, Twitter, Instagram, Linkedin o la Red
                Social que elijas.
              </div>
            </div>
            <div className="element eight">
              <img
                src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677190600/metrica/conversacion_ayoebc.png"
                alt="aseso"
                width={100}
                height={100}
                style={{ borderRadius: "50%" }}
              />
              <h3>Asesoramiento</h3>
              <div>
                Además de diseñar, estamos para ayudarte y guiarte en el uso de
                tu Sitio Web.
              </div>
            </div>
          </div>
        </div>
        <div className="site-web-prices">
          <div className="site-web-prices-title">
            <h1 className="title-black">
              <div className="barra-black"></div>Nuestros planes
            </h1>
          </div>
          <div className="site-web-prices-columns ">
            <div className="web-column basic">
              <div className="web-column-title ">
                <h1>EMPRENDER</h1>
                <b />
                <p>Conseguí presencia profesional en Internet</p>
              </div>
              <div className="web-column-services ">
                <ul>
                  <li> Diseño de 1 sitio con 3 páginas</li>
                  <li>Hosting PLUS incluido</li>
                  <li>Vinculación con WhatsApp</li>
                  <div className={`im-hiding ${showEmprender}`}>
                    <li> Enlace a tus redes sociales</li>
                    <li> Formulario de contacto</li>
                    <li> Optimizado para Google</li>
                    <li> Adaptable a todas las pantallas</li>
                    <li>Certificado de seguridad SSL</li>
                  </div>
                </ul>
                <div className="web-button-show-more">
                  <button
                    className="show-more-button"
                    onClick={showPlanEmprender}
                  >
                    {showEmprender === "" ? "VER MAS" : "VER MENOS"}
                  </button>
                </div>
              </div>
              <div className="web-column-button">
                <button>Consultar</button>
              </div>
            </div>
            <div className="web-column medio">
              <div className="web-column-title2">
                <h1>NEGOCIO</h1>
                <b />
                <p>Llevá tu empresa a nuevos mercados</p>
              </div>
              <div className="web-column-services med">
                <ul>
                  <li> Diseño de 1 sitio con 5 páginas</li>
                  <li>Hosting PLUS incluido</li>
                  <li>Vinculación con WhatsApp</li>
                  <div className={`im-hiding ${showNegocio}`}>
                    <li> Enlace a tus redes sociales</li>
                    <li> Formulario de contacto</li>
                    <li> Optimizado para Google</li>
                    <li> Localización en Google Maps</li>
                    <li> Adaptable a todas las pantallas</li>
                    <li>Certificado de seguridad SSL</li>
                  </div>
                </ul>
              </div>
              <div className="web-button-show-more">
                <button className="show-more-button" onClick={showPlanNegocio}>
                  {showNegocio === "" ? "VER MAS" : "VER MENOS"}
                </button>
              </div>
              <div className="web-column-button">
                <button>Consultar</button>
              </div>
            </div>
            <div className="web-column pro">
              <div className="web-column-title3">
                <h1>TIENDA ONLINE</h1>
                <b />
                <p>Multiplicá tus ventas y llegá a más clientes</p>
              </div>
              <div className="web-column-services ">
                <ul>
                  <li> Diseño de 1 sitio con 5 páginas</li>
                  <li>Hosting NITRO incluido</li>
                  <li>Vinculación con WhatsApp</li>
                  <div className={`im-hiding ${showTienda}`}>
                    <li>Mercadopago y envíos</li>
                    <li>Optimizado paraventas y clientes</li>
                    <li> Cupones con códigos de descuentos</li>
                    <li> Enlace a tus redes sociales</li>
                    <li> Formulario de contacto</li>
                    <li>Optimizado para Google</li>
                    <li>Localización en Google Maps</li>
                    <li> Adaptable a todas las pantallas</li>
                    <li> Certificado de seguridad SSL</li>
                    <li>Tienda autogestionable con tutoriales incluidos</li>
                  </div>
                </ul>
              </div>
              <div className="web-button-show-more">
                <button className="show-more-button" onClick={showPlanTienda}>
                  {showTienda === "" ? "VER MAS" : "VER MENOS"}
                </button>
              </div>
              <div className="web-column-button">
                <button>Consultar</button>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-whatsapp">
          <div className="images-icon-wpp">
            <a
              href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola%20bienvenido!&text=Hola,%20tengo%20una%20consulta!"
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
              href="https://api.whatsapp.com/send?phone=https://api.whatsapp.com/send?phone=5403874149600&text=Hola%20bienvenido!&text=Hola,%20tengo%20una%20consulta!"
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
    // Tienda online//
  );
};

export default SitiosWeb;
