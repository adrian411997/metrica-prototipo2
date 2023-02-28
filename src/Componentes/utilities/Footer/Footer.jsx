import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-content-container">
        <div className="footer-content">
          <div className="column name-column">
            <p>Métrica - Todos los derechos reservados </p>
            <p>Salta - Argentina 2023</p>
          </div>
          <div className="column contact-column">
            <div className="contact">
              <h3>
                <b>Siguenos en nuestras redes sociales:</b>
              </h3>
              <div className="social-buttons">
                <div>
                  <button className="btn">
                    <a
                      href="https://www.instagram.com/metrica.agenciamkt/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <img
                        src={
                          "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546463/metrica/insta_qx22sj.png"
                        }
                        width={30}
                        alt="instagram"
                      />
                    </a>
                  </button>
                  <p>Instagram</p>
                </div>
                <div>
                  <button className="btn-link">
                    <a
                      href="https://www.linkedin.com/company/metricaagenciamkt/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <img
                        src={
                          "https://res.cloudinary.com/dni5cjwpu/image/upload/v1673546463/metrica/linkedin_ijjxfn.png"
                        }
                        width={20}
                        alt="instagram"
                      />
                    </a>
                  </button>
                  <p>LinkedIn</p>
                </div>
                <div>
                  <button className="btn">
                    <a
                      href="https://www.facebook.com/metrica.agenciamkt/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <img
                        src={
                          "https://res.cloudinary.com/dni5cjwpu/image/upload/v1674965372/metrica/pngegg_5_o9pv9l.png"
                        }
                        width={30}
                        alt="instagram"
                      />
                    </a>
                  </button>
                  <p>Facebook</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column contact2-column">
            <div className="column-contact2-container">
              <div className="title-footer-contactus">
                <p>Contactenos</p>
              </div>
              <div className="contact-us">
                <div className="phone-contact">
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677542210/metrica/telefono-inteligente_piiddz.png"
                    alt=""
                    width={25}
                  />
                  <p>+543875850589</p>
                </div>
                <div className="email-contact">
                  <img
                    src="https://res.cloudinary.com/dni5cjwpu/image/upload/v1677542210/metrica/correo-electronico_yhsqc9.png"
                    alt=""
                    width={25}
                  />
                  <p>metrica.agenciamkt@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
