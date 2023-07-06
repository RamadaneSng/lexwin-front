import React, { useEffect, useRef, useState } from "react";
import { GoTriangleRight } from "react-icons/go";
import { Center } from "@mantine/core";
import AOS from "aos";
import "aos/dist/aos.css";

import Link from "next/link";

const Service = () => {
  const servicesRef = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="services"
      ref={servicesRef}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="services-container">
        <div className="top">
          <h2>
            Nos <span>Services</span>{" "}
          </h2>
        </div>

        <div className="list">
          <Center className="center">
            <div className="left">
              <ul>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <Link href="/services">
                    <span>
                      <GoTriangleRight />
                    </span>
                    Assistance juridique & Conseil juridique
                  </Link>
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <Link href="/services">
                    <span>
                      <GoTriangleRight />
                    </span>
                    Intermédiation commerciale
                  </Link>
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <Link href="/services">
                    <span>
                      <GoTriangleRight />
                    </span>
                    Recouvrement de créance
                  </Link>
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <Link href="/services">
                    <span>
                      <GoTriangleRight />
                    </span>
                    Négociation / Médiation, Gestion des PME
                  </Link>
                </li>

                <li data-aos="fade-right" data-aos-duration="1000">
                  <Link href="/services">
                    <span>
                      <GoTriangleRight />
                    </span>
                    Intermédiation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <Link href="/services">
                    <span>
                      <GoTriangleRight />
                    </span>
                    Audit juridique
                  </Link>
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <Link href="/services">
                    <span>
                      <GoTriangleRight />
                    </span>
                    Ressources humaines & Fiscale
                  </Link>
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <Link href="/services">
                    <span>
                      <GoTriangleRight />
                    </span>
                    Formations
                  </Link>
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <Link href="/services">
                    <span>
                      <GoTriangleRight />
                    </span>
                    Procédures d'obtention de visa
                  </Link>
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <Link href="/services">
                    <span>
                      <GoTriangleRight />
                    </span>
                    Prestation diverses
                  </Link>
                </li>
              </ul>
            </div>
          </Center>
        </div>
      </div>
    </div>
  );
};

export default Service;
