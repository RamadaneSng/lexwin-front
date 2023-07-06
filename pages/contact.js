import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Meta from "@/components/Meta";
import Nav from "@/components/Nav";

import React, { useEffect, useState } from "react";

const contact = () => {
  const [mouted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mouted) {
    return <Loading />;
  }
  return (
    <div className="contact">
      <Meta title="Contact" />
      <Nav />
      <div className="diviser"></div>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default contact;
