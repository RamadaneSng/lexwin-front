import Image from "next/image";
import React from "react";
import { ImArrowRight2 } from "react-icons/im";

const ExpertiseCard = ({ img, icon, title, body }) => {
  return (
    <div className="expertise-card">
      <div className="img">
        <Image
          src={img}
          width={200}
          priority
          height={280}
          alt={"icon " + title}
        />
      </div>
      <div className="infos">
        <h3>{title}</h3>
        <p>{body}</p>
        <div className="bottom">
          <span>
            <ImArrowRight2 />
          </span>
          <div className="icon">
            <Image
              src={icon}
              width={60}
              priority
              height={60}
              alt={"icon " + title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
