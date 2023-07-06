import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import ExpertiseCard from "./ExpertiseCard";

const Expertise = () => {
  return (
    <div className="expertise" id="expertise">
      <div className="expertise-content">
        <div className="top">
          <h2>
            Domaines <span>D'expertises</span>{" "}
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
          <Swiper
            className="mySwiper"
            slidesPerView={"3"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            // spaceBetween={"20"}
          >
            <SwiperSlide>
              {" "}
              <ExpertiseCard
                img={"/assets/images/businessman-consulting-legal-expert.jpg"}
                title={"Droit des affaires"}
                body={
                  " Nous sommes en mesure de conseiller nos clients sur une variété de questions juridiques liées aux transactions commerciales ,à la propriété intellectuelle, et plus encore."
                }
                icon={"/assets/images/icons8-business-law-53.png"}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ExpertiseCard
                img={
                  "/assets/images/jeune-homme-habille-costume-formel-assis-dans-cafe.jpg"
                }
                title={"Droit du travail"}
                body={
                  " Nous aidons les employeurs et les employés à naviguer dans les lois et les règlements du travail, à rédiger et à négocier des contrats de travail et à représenter nos clients dans les litiges liés au travail."
                }
                icon={"/assets/images/icons8-permanent-job-50.png"}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ExpertiseCard
                img={"/assets/images/mere-afro-lisant-livre-ses-enfants.jpg"}
                title={"Droit de la famille"}
                body={
                  " Nous aidons nos clients à naviguer dans les lois et les règlements complexes qui régissent les questions de divorce, de garde d'enfants, de pensions alimentaires, de testaments et plus encore."
                }
                icon={"/assets/images/icons8-family-law-66.png"}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ExpertiseCard
                img={"/assets/images/agent-immobilier-remettant-cle-maison.jpg"}
                title={"Droit immobilier"}
                body={
                  " Nous représentons nos clients dans toutes les étapes du processus pénal, de l'enquête initiale à la défense en justice, en nous assurant que leurs droits sont protégés tout au long du processus."
                }
                icon={"/assets/images/icons8-property-64.png"}
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <ExpertiseCard
                img={"/assets/images/businessman-consulting-legal-expert.jpg"}
                title={"Droit pénal"}
                body={
                  " Nous représentons nos clients dans toutes les étapes du processus pénal, de l'enquête initiale à la défense en justice, en nous assurant que leurs droits sont protégés tout au long du processus."
                }
                icon={"/assets/images/icons8-handcuffs-50.png"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
