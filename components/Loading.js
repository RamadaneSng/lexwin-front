import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="loading">
      <div className="logo">
        <Image
          src="/assets/images/Logo.png"
          width={100}
          priority
          height={50}
          alt="logo lexwin"
        />
      </div>
    </div>
  );
};

export default Loading;
