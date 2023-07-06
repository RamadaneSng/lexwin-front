import React, { useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import { Blockquote } from "@mantine/core";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="testimonials">
      <div
        className="testimonials-content"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="right">
          <h2>Témoignages</h2>
        </div>
        <div className="content">
          <Carousel maw={400} mx="auto" height={200}>
            <Carousel.Slide>
              {" "}
              <Blockquote cite="– Forrest Gump">
                Life is like an npm install – you never know what you are going
                to get.
              </Blockquote>
            </Carousel.Slide>
            <Carousel.Slide>
              <Blockquote cite="– Forrest Gump">
                Life is like an npm install – you never know what you are going
                to get.
              </Blockquote>
            </Carousel.Slide>
            <Carousel.Slide>
              <Blockquote cite="– Forrest Gump">
                Je suis très satisfait des services que j'ai reçus de ce cabinet
                de droit. Ils ont été très attentifs à mes besoins et m'ont aidé
                à naviguer dans un processus complexe.
              </Blockquote>
            </Carousel.Slide>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
