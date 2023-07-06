import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Header from "@/components/Header";
import About from "@/components/About";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Articles from "@/components/Articles";
import Meta from "@/components/Meta";
import Loading from "@/components/Loading";

const index = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 2000);
  }, []);

  if (!mounted) {
    return <Loading />;
  }
  return (
    <div className="home">
      <Meta title="Acceuil" description="" />
      <Nav />
      <Header />
      <About />
      {/* <Expertise /> */}
      <Service />
      <Articles />
      <CallToAction />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default index;
