import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="loading">
      <div className="logo">
        <Image
          src="/assets/images/logo 3 copie.png"
          width={100}
          priority
          height={50}
          alt="logo web-menu"
        />
      </div>
    </div>
  );
};

export default Loading;
