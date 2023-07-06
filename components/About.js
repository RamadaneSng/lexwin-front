import { Button, Group } from "@mantine/core";
import Link from "next/link";
import React, { useEffect, } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
 
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about">
      <div
        className="about-content"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <div className="top">
          <h2>
            À propos de <span>Nous</span>{" "}
          </h2>
          <p>
            Nous sommes une équipe passionnée de juristes, avocats et experts en
            droit qui croient que chaque client mérite une approche
            personnalisée et adaptée à ses besoins uniques. Nous sommes là pour
            vous écouter, vous comprendre et vous guider dans chaque étape de
            votre parcours juridique.
          </p>
        </div>

        <div className="bottom">
          <div className="img-1"></div>
          <div className="img-2"></div>
          <div className="img-3"></div>
          <div className="list">
            <ul>
              <li>
                <span>
                  <BsFillCheckCircleFill
                    size="1rem"
                    style={{ color: "#03224c" }}
                  />
                </span>
                Notre équipe d'avocats expérimentés est là pour vous aider à
                résoudre vos problèmes juridiques les plus complexes.
              </li>
              <li>
                <span>
                  <BsFillCheckCircleFill
                    size="1rem"
                    style={{ color: "#03224c" }}
                  />
                </span>
                Nous sommes là pour répondre à toutes vos questions et
                préoccupations juridiques et pour vous aider à prendre des
                décisions éclairées.
              </li>
              <li>
                <span>
                  <BsFillCheckCircleFill
                    size="1rem"
                    style={{ color: "#03224c" }}
                  />
                </span>
                nous croyons que chaque client mérite une représentation
                juridique compétente et personnalisée.
              </li>
              <li>
                <span>
                  <BsFillCheckCircleFill
                    size="1rem"
                    style={{ color: "#03224c" }}
                  />
                </span>
                Nous nous engageons à protéger vos droits et à défendre vos
                intérêts tout au long du processus juridique.
              </li>
              <li>
                <span>
                  <BsFillCheckCircleFill
                    size="1rem"
                    style={{ color: "#03224c" }}
                  />
                </span>
                Nous travaillons dur pour nous assurer que nos clients sont
                satisfaits de nos services et que leurs besoins juridiques sont
                satisfaits.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Group position="right" className="group">
        <Link href="/about">
          <Button radius={0} className="learn-more-btn">
            Apprendre plus
          </Button>
        </Link>
      </Group>
    </div>
  );
};

export default About;
