import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

const BurgerMenu = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  return (
    <Burger
      className="burger"
      opened={opened}
      onClick={toggle}
      aria-label={label}
    />
  );
};

export default BurgerMenu;
