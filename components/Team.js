import Image from "next/image";
import React from "react";

const Team = ({ img, name, email }) => {
  return (
    <div className="team">
      <div className="img">
        <Image src={img} width={140} priority height={140} alt="image team" />
      </div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Team;
