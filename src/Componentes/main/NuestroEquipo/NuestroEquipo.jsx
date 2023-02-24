import React, { useEffect } from "react";
import Footer from "../../utilities/Footer/Footer";
import Header from "../../utilities/Header/Header";

import "./NuestroEquipo.css";
const NuestroEquipo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="intro-container">
        <div className="intro-content">
          <div className="intro-writing">
            <h1>
              LO QUE NECESITAS ES UN <b className="first-topic">EQUIPAZO</b> QUE
              SE LE JUEGUE POR TI
            </h1>
          </div>
        </div>
      </div>
      <div className="members" id="members">
        <div className="members-container-content">
          <h1 className="title-black">
            <div className="barra-black"></div>COMO SOMOS
          </h1>
        </div>
        <div className="memeber-writting">
          <div className="image-illustrative"></div>
          <div className="text-memebers-intro">
            <h1>Una vision y una mision que solo nosotros compartimos</h1>
            <p>
              Profesionales unidos por la misma pasión, creamos y crecemos
              juntos.
            </p>
            <p>
              Nuestro talento, a su disposicion y nuestros esfuerzos alineado a
              sus intereses.
            </p>
          </div>
        </div>
        <div className="members-talents-carac">
          <div class="triangle triangle1"></div>
          <div class="triangle triangle2"></div>
          <div class="triangle triangle3"></div>

          <div className="member-talents-title">
            <h1 className="title-white">
              <div className="barra-white"></div>PORQUE SOMOS LOS MEJORES EN
            </h1>
          </div>
          <div className="members-talents-container">
            <div className="talent">
              <div className="img-talent">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676939545/metrica/pensamiento-cr%C3%ADtico-II_g0orvl.webp"
                  alt=""
                />
              </div>
              <div className="title-talent">CREATIVIDAD</div>
              <div className="talent-description">
                Ideamos, improvisamos y ensayamos en diversos programas de
                edición gráfica para crear recursos espectulares para su próxima
                página web.
              </div>
            </div>
            <div className="talent">
              <div className="img-talent">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676939545/metrica/pensamiento-cr%C3%ADtico-II_g0orvl.webp"
                  alt=""
                />
              </div>
              <div className="title-talent">PENSAMIENTO CRITICO</div>
              <div className="talent-description">
                Buscamos siempre el mejor metodo para ejecutar nuestras tareas
                viendo todas las posibilidades considerando siempre sus
                necesidades{" "}
              </div>
            </div>
            <div className="talent">
              <div className="img-talent">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676939545/metrica/pensamiento-cr%C3%ADtico-II_g0orvl.webp"
                  alt=""
                />
              </div>
              <div className="title-talent">CODEAR</div>
              <div className="talent-description"></div>
            </div>
            <div className="talent">
              <div className="img-talent">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676939545/metrica/pensamiento-cr%C3%ADtico-II_g0orvl.webp"
                  alt=""
                />
              </div>
              <div className="title-talent">PLANIFICACION</div>
              <div className="talent-description"></div>
            </div>
            <div className="talent">
              <div className="img-talent">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676939545/metrica/pensamiento-cr%C3%ADtico-II_g0orvl.webp"
                  alt=""
                />
              </div>
              <div className="title-talent">ESTILOS</div>
              <div className="talent-description"></div>
            </div>
            <div className="talent">
              <div className="img-talent">
                <img
                  src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1676939545/metrica/pensamiento-cr%C3%ADtico-II_g0orvl.webp"
                  alt=""
                />
              </div>
              <div className="title-talent">SORP</div>
              <div className="talent-description"></div>
            </div>
          </div>
        </div>
        <div className="memebers-container">
          <div className="members-container-photos-title">
            <h1 className="title-black">
              <div className="barra-black"></div>NUESTRO EQUIPO
            </h1>
          </div>
          <div className="cards">
            <div className="card daniel">
              <div className="info">
                <h2>Daniel Moya</h2>
                <p>Ceo, Experto en Marketing Digital</p>
                <div className="data">
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546463/metrica/linkedin_ijjxfn.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546463/metrica/insta_qx22sj.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1656648603/pngkey.com-facebook-transparent-png-2065907_smiavl.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1673643151/metrica/NicePng_twitter-png-logo_88155_fjqvei.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
            <div className="card lucas">
              <div className="info">
                <h2>Lucas Flores</h2>
                <p>Ceo, Programador</p>
                <div className="data">
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546463/metrica/linkedin_ijjxfn.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546463/metrica/insta_qx22sj.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1656648603/pngkey.com-facebook-transparent-png-2065907_smiavl.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1673643151/metrica/NicePng_twitter-png-logo_88155_fjqvei.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
            <div className="card adrian">
              <div className="info">
                <h2>Adrian Martinez</h2>
                <p>Ceo, Programador</p>
                <div className="data">
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546463/metrica/linkedin_ijjxfn.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546463/metrica/insta_qx22sj.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1656648603/pngkey.com-facebook-transparent-png-2065907_smiavl.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1673643151/metrica/NicePng_twitter-png-logo_88155_fjqvei.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
            <div className="card ricardo">
              <div className="info">
                <h2>Ricardo Liendro</h2>
                <p>Diseñador Grafico</p>
                <div className="data">
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546463/metrica/linkedin_ijjxfn.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546463/metrica/insta_qx22sj.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1656648603/pngkey.com-facebook-transparent-png-2065907_smiavl.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1673643151/metrica/NicePng_twitter-png-logo_88155_fjqvei.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default NuestroEquipo;
