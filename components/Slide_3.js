import { Button, Center } from "@mantine/core";
import Link from "next/link";
import React from "react";

const Slide_3 = () => {
  return (
    <div className="slide slide-3">
      <div className="color"></div>
      <div className="slide-items">
        <h1>Notre devoir est de veiller sur au respect de vos droits</h1>
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

export default Slide_3;
