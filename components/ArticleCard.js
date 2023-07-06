import Image from "next/image";
import React from "react";
import { Badge } from "@mantine/core";
import Link from "next/link";
import moment from "moment";
import "moment/locale/fr";

const ArticleCard = ({ item, isLoading }) => {
  console.log(item);

  return (
    <div className="article-card">
      {/* <Link href="/article/[id]" as={`article/${item.id}`}> */}
      <div className="img">
        <Image
          // loader={() => `http://127.0.0.1:8000/${item?.image}`}
          // src={item.image && `http://127.0.0.1:8000/${item?.image}`}
          src={item.image}
          width={350}
          priority
          height={250}
          alt="menu soutra"
        />
      </div>

      <div className="domain">
        {" "}
        <Badge className="badge" radius={4}>
          {item.domain}
        </Badge>
      </div>

      <h3 className="title">{item.title}</h3>
      <span className="date">
        Publié le {moment(item?.created_at).locale("fr").calendar()}
      </span>
      {/* </Link> */}
    </div>
  );
};

export default ArticleCard;
