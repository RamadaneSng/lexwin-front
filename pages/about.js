import Nav from "@/components/Nav";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Footer from "@/components/Footer";
import Expertises from "@/components/Expertises";
import Meta from "@/components/Meta";
import Loading from "@/components/Loading";
import { BsFillCheckCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const about = () => {
  const items = [
    "Fondateurs",
    "Avocats",
    "Comptable",
    "Responsables Marketing",
    "Stagiaires",
  ];
  // const [filter, setFilter] = useState("Fondateurs");

  const [mouted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init();
    setMounted(true);
  }, []);

  if (!mouted) {
    return <Loading />;
  }
  return (
    <div className="about-page">
      <Meta title="A propos" />
      <Nav />
      <div className="about-page-header">
        <div className="color"></div>
        <div className="content" data-aos="fade-up" data-aos-duration="3000">
          <h3>Le cabinet</h3>
          <h1>LEXWIN</h1>
          <p>
            vous accompagne dans vos situations impliquant le droit et la
            justice .
          </p>
        </div>
      </div>
      <div className="who-we-are">
        <h2>
          Qui sommes <span>nous ?</span>
        </h2>
        <div
          className="presentation"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div grow className="group">
            <div className="left"></div>
            <div className="right">
              Société à responsabilité limité (SARL) pluripersonnelle{" "}
              <span>Lexwin</span> est un cabinet de collaborateurs motivés et
              courageux qui n'ont pas peur de repousser les limites en vue
              d'agir comme de véritables partenaires commerciaux pour Nox
              clients en les traitants avec respect et intégrité. Considérant
              leur activité comme la nôtre: nous les défendons dans les
              situations critiques .
            </div>
          </div>
        </div>
      </div>
      <div className="immigration" data-aos="fade-up" data-aos-duration="3000">
        <div className="header">
          <h2>
            Immigration <span>Canada</span>
          </h2>
          <p>
            Si vous envisagez de vous installer au Canada, notre cabinet est là
            pour vous aider à naviguer dans les exigences d'immigration et les
            procédures complexes. Nous sommes experts dans l'assistance aux
            voyageurs pour obtenir des visas et des permis de travail, ainsi que
            pour trouver les meilleures options de logement et d'emploi dans
            différentes villes canadiennes.
          </p>
        </div>
        <div className="immigration-content">
          <div className="img"></div>
          <div className="list">
            <ul>
              <li>
                <span>
                  <BsFillCheckCircleFill
                    size="1rem"
                    style={{ color: "#03224c" }}
                  />
                </span>
                Obtenez des conseils sur les documents nécessaires pour votre
                demande de visa.
              </li>
              <li>
                <span>
                  <BsFillCheckCircleFill
                    size="1rem"
                    style={{ color: "#03224c" }}
                  />
                </span>
                Découvrez les programmes d'immigration canadiens pour les
                travailleurs qualifiés.
              </li>
              <li>
                <span>
                  <BsFillCheckCircleFill
                    size="1rem"
                    style={{ color: "#03224c" }}
                  />
                </span>
                Bénéficiez de notre expertise dans l'élaboration de votre
                dossier de demande d'immigration.
              </li>
              <li>
                <span>
                  <BsFillCheckCircleFill
                    size="1rem"
                    style={{ color: "#03224c" }}
                  />
                </span>
                Profitez de notre assistance personnalisée tout au long de votre
                processus d'immigration.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="quote">
        <div className="content" data-aos="fade-up" data-aos-duration="2500">
          <div className="icon">
            <FaQuoteLeft />
          </div>
          <p>
            Le droit est un langage qui parle de la vie et de la liberté des
            hommes. Il est un lien entre le passé, le présent et l'avenir. Il
            est la mémoire de l'humanité, un patrimoine commun qui doit être
            préservé et développé pour le bien de tous. Le droit est un pilier
            de la civilisation, qui permet aux hommes de vivre ensemble dans la
            paix, la sécurité et la justice
          </p>
          <h3>René Cassin</h3>
        </div>
      </div>
      <Expertises />
      <div className="office" data-aos="fade-up" data-aos-duration="3000">
        <h2>Notre bureau</h2>
        <p>Abidjan , Cocody Abatta</p>
        <div className="content">
          <div className="img">
            <a
              href="https://www.google.com/maps/place/WebTurba/@5.3734339,-3.9280755,17z/data=!3m1!4b1!4m6!3m5!1s0xfc1ed56fb1a5b1d:0x5d07775b307fc8a0!8m2!3d5.3734339!4d-3.9280755!16s%2Fg%2F11jzs6330v?hl=fr-CI"
              target="_blank"
            >
              <span>
                <HiArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default about;
