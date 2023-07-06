import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

const Nav = () => {
  const router = useRouter();
  const [opened, { toggle, close }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const [showNav, setshowNav] = useState(false);

  const handleBurger = () => {
    setshowNav(!showNav);
    toggle();
  };

  return (
    <nav className="navbar">
      <Link href="/">
        <div className="logo">
          <Image
            src="/assets/images/Logo.png"
            width={100}
            priority
            height={50}
            alt="logo lexwin"
          />
        </div>
      </Link>
      <div className="items">
        <ul>
          <Link href="/">
            <li className={router.pathname == "/" ? "active" : ""}>Acceuil</li>
          </Link>
          <Link href="/about">
            <li className={router.pathname == "/about" ? "active" : ""}>
              A propos
            </li>
          </Link>

          <Link href={"/services"}>
            <li className={router.pathname == "/services" ? "active" : ""}>
              Services
            </li>
          </Link>
          <Link href={"/news"}>
            <li className={router.pathname == "/news" ? "active" : ""}>
              Actualités
            </li>
          </Link>
          <Link href={"/contact"}>
            <li className={router.pathname == "/contact" ? "active" : ""}>
              Contact
            </li>
          </Link>
        </ul>
        <Burger
          className="burger"
          color="#03224c"
          size={20}
          onClick={handleBurger}
          opened={opened}
          // onClick={toggle}
          aria-label={label}
        />
      </div>
      {showNav && (
        <div className="dropdown-nav" opened={toggle}>
          <ul>
            <Link href="/">
              <li
                className={router.pathname == "/" ? "dropdown-active" : ""}
                onClick={(event) => {
                  // event.preventDefault();

                  close();
                }}
              >
                Acceuil
              </li>
            </Link>
            <Link href="/about">
              <li
                className={router.pathname == "/about" ? "dropdown-active" : ""}
              >
                A propos
              </li>
            </Link>

            <Link href={"/services"}>
              <li
                className={
                  router.pathname == "/services" ? "dropdown-active" : ""
                }
              >
                Services
              </li>
            </Link>
            <Link href={"/news"}>
              <li
                className={router.pathname == "/news" ? "dropdown-active" : ""}
              >
                Actualités
              </li>
            </Link>
            <Link href={"/contact"}>
              <li
                className={
                  router.pathname == "/contact" ? "dropdown-active" : ""
                }
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
