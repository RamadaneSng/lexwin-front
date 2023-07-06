import { Button, Center } from "@mantine/core";
import Link from "next/link";
import React from "react";

const Slide_2 = () => {
  return (
    <div className="slide slide-2">
      <div className="color"></div>
      <div className="slide-items">
        <h1>Nous vous accompagnons dans l'optimisation de votre entreprise</h1>
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

export default Slide_2;
