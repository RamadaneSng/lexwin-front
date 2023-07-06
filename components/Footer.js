import axios from "@/lib/axios";
import { Button, TextInput } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { ImPhoneHangUp } from "react-icons/im";
import { notifications } from "@mantine/notifications";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="left">
          <div className="logo">
            <Image
              src="/assets/images/Logo.png"
              width={120}
              priority
              height={55}
              alt="logo lexwin"
            />
          </div>
        </div>
        <div className="discover">
          <h5>Découvrir</h5>
          <ul>
            <Link href="/about">
              <li>À propos</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/news">
              <li>Actualités</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="contact">
          <h5>Contact</h5>
          <p>
            <span className="icon">
              <ImPhoneHangUp />
            </span>
            <span>+ 225 05 05 01 62 06</span>
          </p>
          <p>
            <span className="icon">
              <HiMail />
            </span>
            <span>info@lexwin-cabinet.com</span>
          </p>
        </div>
        <div className="social">
          <h5>Social</h5>
          <div className="social-content">
            <span>
              <BsFacebook />
              <p>facebook</p>
            </span>
            <span>
              <BsTwitter />
              <p>twitter</p>
            </span>
            <span>
              <FaLinkedinIn />
              <p>linkedIn</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
