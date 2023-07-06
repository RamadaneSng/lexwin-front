import React, { useEffect } from "react";
import useSWR from "swr";
import ArticleCard from "./ArticleCard";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Articles = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:8000/api/articles",
    fetcher
  );

  const articles = data?.articles;

  const articless = [
    {
      id: 7,
      title:
        "Cour d'assises de Dijon : « Vous avez eu ma robe, vous n'aurez pas ma parole »",
      domain: "JUSTICE",
      content:
        "En trois pas, Mohamed, 40 ans, a bondi de son banc à la barre. Silhouette carrée, ample chevelure noire ondulée et longue barbe pointue, il parle abondamment d'une voix chaleureuse, ponctuant ses explications de nombreuses marques de politesse à l’endroit de la juge, ce qui a pour effet de rendre la discussion agréable. Cela étant dit, il n’est pas du tout d’accord avec la version des faits qu’elle vient de lire. La juge a relaté que le 9 novembre 2021 à Cergy, un individu au volant d’une Audi roulant à vive allure, après avoir collé son véhicule à celui de José, l’a doublé par la voie de bus, et s’est rabattu presque sur lui. Un peu plus loin, au feu, le chauffard a serré le frein à main, quitté le véhicule et s’est avancé vers José avec des intentions manifestement hostiles. La juge rapporte que l’individu aurait ensuite ouvert la porte de la voiture de José, un homme tranquille de 62 ans, lui aurait craché dessus et serait reparti. Mais, se ravisant, il serait revenu sur ses pas, aurait tiré José hors de sa voiture, le faisant trébucher au sol, puis l’aurait frappé à coups de poing et surtout à coups de pied, jusqu’à ce qu’un livreur de sushis sépare les belligérants. José est allongé par terre, entouré de passants qui attendent les secours à ses côtés. Deux témoins ont décrit la scène, ou plutôt chacun a décrit une partie de la scène, reconstituée à partir des éléments concordants.",
      created_at: "2023-04-17T12:33:16.000000Z",
      image: "/assets/images/1681737167.jpeg",
    },
  ];

  return (
    <div className="articles" data-aos="fade-up" data-aos-duration="2500">
      <h2>Actualités</h2>
      <Swiper
        className="mySwiper"
        slidesPerView={"1"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        // spaceBetween={"1"}
      >
        {" "}
        {articless
          ?.sort((a, b) => (a.id < b.id ? 1 : -1))
          .map((item) => (
            <SwiperSlide>
              <ArticleCard key={item.id} item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Articles;
