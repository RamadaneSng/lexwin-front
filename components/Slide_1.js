import { Button, Center } from "@mantine/core";
import Link from "next/link";
import React, { useRef } from "react";


const Slide_1 = () => {
  const slideItemsRef = useRef();

  return (
    <div className="slide slide-1">
      <div className="color"></div>
      <div className="slide-items" ref={slideItemsRef}>
        <h1>Nous vous facilitons tout type d'accès su canada</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
          sapiente.
        </p>
        <Center>
          <Link href="/contact">
            <Button radius={0}>Contactez Nous</Button>
          </Link>
        </Center>
      </div>
    </div>
  );
};

export default Slide_1;
