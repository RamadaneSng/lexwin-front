import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Accordion} from "@mantine/core";
import React, { useEffect, useState } from "react";
import Action from "@/components/Action";
import Meta from "@/components/Meta";
import Loading from "@/components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

const services = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    AOS.init();
  }, []);

  if (!mounted) {
    return <Loading />;
  }
  return (
    <div className="services-page">
      <Meta title="Services" />
      <Nav />
      <div className="diviser"></div>
      <div
        className="services-list"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h2>
          Nos <span>Services</span>
        </h2>
        <div className="list">
          <ul>
            <li>
              <span className="icon">
                {/* <Image
                  src="/assets/images/icons8-advice-67 (2).png"
                  width={50}
                  priority
                  height={50}
                  alt="image mediation"
                /> */}
              </span>
              <h3 className="title">
                Assistance juridique & Conseil juridique
              </h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolores.
              </p>
            </li>
            <li>
              <span className="icon">
                {/* <Image
                  src="/assets/images/icons8-advice-67 (2).png"
                  width={50}
                  priority
                  height={50}
                  alt="image mediation"
                /> */}
              </span>
              <h3 className="title">Intermédiation commerciale</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolores.
              </p>
            </li>
            <li data-aos="fade-right" data-aos-duration="3000">
              <span className="icon">
                {/* <Image
                  src="/assets/images/icons8-advice-67 (2).png"
                  width={50}
                  priority
                  height={50}
                  alt="image mediation"
                /> */}
              </span>
              <h3 className="title">Recouvrement de créance</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolores.
              </p>
            </li>
            <li data-aos="fade-right" data-aos-duration="3000">
              <span className="icon">
                {/* <Image
                  src="/assets/images/icons8-advice-67 (2).png"
                  width={50}
                  priority
                  height={50}
                  alt="image mediation"
                /> */}
              </span>
              <h3 className="title">
                Négociation / Médiation, Gestion des PME{" "}
              </h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolores.
              </p>
            </li>
            <li data-aos="fade-right" data-aos-duration="3000">
              <span className="icon">
                {/* <Image
                  src="/assets/images/icons8-advice-67 (2).png"
                  width={50}
                  priority
                  height={50}
                  alt="image mediation"
                /> */}
              </span>
              <h3 className="title">Intermédiation </h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolores.
              </p>
            </li>
            <li data-aos="fade-right" data-aos-duration="3000">
              <span className="icon">
                {/* <Image
                  src="/assets/images/icons8-advice-67 (2).png"
                  width={50}
                  priority
                  height={50}
                  alt="image mediation"
                /> */}
              </span>
              <h3 className="title">Audit juridique</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolores.
              </p>
            </li>
            <li data-aos="fade-right" data-aos-duration="3000">
              <span className="icon">
                {/* <Image
                  src="/assets/images/icons8-advice-67 (2).png"
                  width={50}
                  priority
                  height={50}
                  alt="image mediation"
                /> */}
              </span>
              <h3 className="title">Ressources humaines & Fiscale</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolores.
              </p>
            </li>
            <li data-aos="fade-right" data-aos-duration="3000">
              <span className="icon">
                {/* <Image
                  src="/assets/images/icons8-advice-67 (2).png"
                  width={50}
                  priority
                  height={50}
                  alt="image mediation"
                /> */}
              </span>
              <h3 className="title">Formations </h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolores.
              </p>
            </li>
            <li data-aos="fade-right" data-aos-duration="3000">
              <span className="icon">
                {/* <Image
                  src="/assets/images/icons8-advice-67 (2).png"
                  width={50}
                  priority
                  height={50}
                  alt="image mediation"
                /> */}
              </span>
              <h3 className="title">Procédures d'obtention de visa</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolores.
              </p>
            </li>
            <li data-aos="fade-right" data-aos-duration="3000">
              <span className="icon">
                {/* <Image
                  src="/assets/images/icons8-advice-67 (2).png"
                  width={50}
                  priority
                  height={50}
                  alt="image mediation"
                /> */}
              </span>
              <h3 className="title">Présentaion diverses</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolores.
              </p>
            </li>
          </ul>
        </div>
        <div className="faq">
          <h3>Questions fréquemment posées</h3>
          <div className="content">
            <Accordion transitionDuration={300}>
              <Accordion.Item value="Pourquoi faire appel à un cabinet de droit ?">
                <Accordion.Control>
                  Pourquoi faire appel à un cabinet de droit ?
                </Accordion.Control>
                <Accordion.Panel>
                  Faire appel à un cabinet de droit peut vous aider à résoudre
                  des problèmes juridiques complexes en vous fournissant des
                  conseils juridiques professionnels et en vous représentant
                  devant les tribunaux si nécessaire. Les avocats d'un cabinet
                  de droit peuvent vous aider à comprendre les implications
                  juridiques de vos actions et à naviguer dans le système
                  juridique. En outre, ils peuvent vous aider à rédiger des
                  documents juridiques, à négocier des accords et à représenter
                  vos intérêts devant les tribunaux et les organismes
                  gouvernementaux.
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="Combien coûte une prestation dans votre cabinet ?">
                <Accordion.Control>
                  Combien coûte une prestation dans votre cabinet ?
                </Accordion.Control>
                <Accordion.Panel>
                  Le coût d'une prestation dans notre cabinet dépendra de
                  plusieurs facteurs, notamment la complexité du cas, le temps
                  nécessaire pour le traiter et les ressources nécessaires pour
                  le résoudre. Nous travaillons avec nos clients pour déterminer
                  un budget qui fonctionne pour eux et nous offrons des options
                  de paiement flexibles pour répondre à leurs besoins.
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="Quels types de cas traitez-vous?">
                <Accordion.Control>
                  Quels types de cas traitez-vous ?
                </Accordion.Control>
                <Accordion.Panel>
                  Notre cabinet de droit traite une variété de cas, y compris
                  les affaires criminelles, les litiges civils, les faillites,
                  les successions, les affaires familiales, les blessures
                  corporelles, les questions de propriété intellectuelle et bien
                  plus encore. Nous avons des avocats spécialisés dans chaque
                  domaine pour offrir les meilleurs conseils et services à nos
                  clients.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <Action />
      <Footer />
    </div>
  );
};

export default services;
