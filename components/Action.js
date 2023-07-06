import { Button } from "@mantine/core";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Action = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="action" data-aos="fade-up" data-aos-duration="3000">
      <div className="action-content">
        <div className="content">
          <h2>
            Protégez dès maintenant vos intérêts et défendez vos droits avec
            l'expertise de notre cabinet .
          </h2>
          <Link href="/contact">
            <Button radius={0}>Contactez nous</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Action;
