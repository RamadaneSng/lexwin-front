import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import axios from "@/lib/axios";
import useSWR from "swr";

// import axios from "axios";
import React, { useEffect, useState } from "react";
import Meta from "@/components/Meta";
import Loading from "@/components/Loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const news = () => {
  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:8000/api/articles",
    fetcher
  );
  const [artcilesData, setArtcilesData] = useState([]);
  const [tagFilter, setTagFilter] = useState("TOUT");
  const [filter, setFilter] = useState();
  // const [load, setLoad] = useState(false);

  let filterList = ["TOUT"];

  // if (isLoading) {
  //   return <p>Loading ...</p>;
  // }

  data?.articles.map((el) => {
    if (!filterList.includes(el.domain)) {
      filterList.push(el.domain);
    }
  });

  const filterlist2 = [
    "TOUT",
    "PÉNAL",
    "JUSTICE",
    "PROFESSIONS",
    "FISCAL / FINANCES",
  ];

  console.log(filterList);

  const filterData = (index) => {
    if (index === "TOUT") {
      const filter = articless.filter((el) => el.domain !== index);
      setFilter(filter);
    } else {
      const filter = articless.filter((el) => el.domain === index);
      setFilter(filter);
    }
  };

  // console.log(filterList);
  const [mouted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

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
    {
      id: 9,
      title:
        "Cour d'assises de Dijon : « Vous avez eu ma robe, vous n'aurez pas ma parole »",
      domain: "PÉNAL",
      content:
        "En trois pas, Mohamed, 40 ans, a bondi de son banc à la barre. Silhouette carrée, ample chevelure noire ondulée et longue barbe pointue, il parle abondamment d'une voix chaleureuse, ponctuant ses explications de nombreuses marques de politesse à l’endroit de la juge, ce qui a pour effet de rendre la discussion agréable. Cela étant dit, il n’est pas du tout d’accord avec la version des faits qu’elle vient de lire. La juge a relaté que le 9 novembre 2021 à Cergy, un individu au volant d’une Audi roulant à vive allure, après avoir collé son véhicule à celui de José, l’a doublé par la voie de bus, et s’est rabattu presque sur lui. Un peu plus loin, au feu, le chauffard a serré le frein à main, quitté le véhicule et s’est avancé vers José avec des intentions manifestement hostiles. La juge rapporte que l’individu aurait ensuite ouvert la porte de la voiture de José, un homme tranquille de 62 ans, lui aurait craché dessus et serait reparti. Mais, se ravisant, il serait revenu sur ses pas, aurait tiré José hors de sa voiture, le faisant trébucher au sol, puis l’aurait frappé à coups de poing et surtout à coups de pied, jusqu’à ce qu’un livreur de sushis sépare les belligérants. José est allongé par terre, entouré de passants qui attendent les secours à ses côtés. Deux témoins ont décrit la scène, ou plutôt chacun a décrit une partie de la scène, reconstituée à partir des éléments concordants.",
      created_at: "2023-04-17T12:33:16.000000Z",
      image: "/assets/images/1681737167.jpeg",
    },
    {
      id: 10,
      title:
        "Cour d'assises de Dijon : « Vous avez eu ma robe, vous n'aurez pas ma parole »",
      domain: "JUSTICE",
      content:
        "En trois pas, Mohamed, 40 ans, a bondi de son banc à la barre. Silhouette carrée, ample chevelure noire ondulée et longue barbe pointue, il parle abondamment d'une voix chaleureuse, ponctuant ses explications de nombreuses marques de politesse à l’endroit de la juge, ce qui a pour effet de rendre la discussion agréable. Cela étant dit, il n’est pas du tout d’accord avec la version des faits qu’elle vient de lire. La juge a relaté que le 9 novembre 2021 à Cergy, un individu au volant d’une Audi roulant à vive allure, après avoir collé son véhicule à celui de José, l’a doublé par la voie de bus, et s’est rabattu presque sur lui. Un peu plus loin, au feu, le chauffard a serré le frein à main, quitté le véhicule et s’est avancé vers José avec des intentions manifestement hostiles. La juge rapporte que l’individu aurait ensuite ouvert la porte de la voiture de José, un homme tranquille de 62 ans, lui aurait craché dessus et serait reparti. Mais, se ravisant, il serait revenu sur ses pas, aurait tiré José hors de sa voiture, le faisant trébucher au sol, puis l’aurait frappé à coups de poing et surtout à coups de pied, jusqu’à ce qu’un livreur de sushis sépare les belligérants. José est allongé par terre, entouré de passants qui attendent les secours à ses côtés. Deux témoins ont décrit la scène, ou plutôt chacun a décrit une partie de la scène, reconstituée à partir des éléments concordants.",
      created_at: "2023-04-17T12:33:16.000000Z",
      image: "/assets/images/1681737167.jpeg",
    },
    {
      id: 10,
      title:
        "Cour d'assises de Dijon : « Vous avez eu ma robe, vous n'aurez pas ma parole »",
      domain: "PROFESSIONS",
      content:
        "En trois pas, Mohamed, 40 ans, a bondi de son banc à la barre. Silhouette carrée, ample chevelure noire ondulée et longue barbe pointue, il parle abondamment d'une voix chaleureuse, ponctuant ses explications de nombreuses marques de politesse à l’endroit de la juge, ce qui a pour effet de rendre la discussion agréable. Cela étant dit, il n’est pas du tout d’accord avec la version des faits qu’elle vient de lire. La juge a relaté que le 9 novembre 2021 à Cergy, un individu au volant d’une Audi roulant à vive allure, après avoir collé son véhicule à celui de José, l’a doublé par la voie de bus, et s’est rabattu presque sur lui. Un peu plus loin, au feu, le chauffard a serré le frein à main, quitté le véhicule et s’est avancé vers José avec des intentions manifestement hostiles. La juge rapporte que l’individu aurait ensuite ouvert la porte de la voiture de José, un homme tranquille de 62 ans, lui aurait craché dessus et serait reparti. Mais, se ravisant, il serait revenu sur ses pas, aurait tiré José hors de sa voiture, le faisant trébucher au sol, puis l’aurait frappé à coups de poing et surtout à coups de pied, jusqu’à ce qu’un livreur de sushis sépare les belligérants. José est allongé par terre, entouré de passants qui attendent les secours à ses côtés. Deux témoins ont décrit la scène, ou plutôt chacun a décrit une partie de la scène, reconstituée à partir des éléments concordants.",
      created_at: "2023-04-17T12:33:16.000000Z",
      image: "/assets/images/1681737167.jpeg",
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="news">
      <Meta title="Actualités" />
      <Nav />
      <div className="filter-container">
        <ul>
          {filterlist2?.map((el) => (
            <li key={el}>
              <input
                type="radio"
                name="filte-el"
                id={el}
                defaultChecked={el === tagFilter}
              />

              <label
                htmlFor={el}
                onClick={() => {
                  filterData(el);
                }}
              >
                {el}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="articles-container">
        <ul>
          {typeof filter === "undefined"
            ? articless
                .sort((a, b) => (a.id < b.id ? 1 : -1))
                .map((item) => <ArticleCard key={item.id} item={item} />)
            : filter?.map((item) => <ArticleCard key={item.id} item={item} />)}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default news;
