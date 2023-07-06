import Image from "next/image";
import React from "react";

const Expertises = () => {
  return (
    <div className="expertises">
      <h2 data-aos="fade-up" data-aos-duration="3000">
        Domaines <span>D'expertises</span>{" "}
      </h2>
      <div
        className="services-content"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="services">
          <div className="img">
            <Image
              src="/assets/images/juridique.png"
              width={50}
              priority
              height={50}
              alt="image redcation"
            />
          </div>
          <h3>Services Juridiques</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, debitis!
          </p>
        </div>

        <div className="voyages">
          <div className="img">
            <Image
              src="/assets/images/voyage.png"
              width={50}
              priority
              height={50}
              alt="image mediation"
            />
          </div>
          <h3>Immigration</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, debitis!
          </p>
        </div>
        <div className="immobilier">
          <div className="img">
            <Image
              src="/assets/images/hypotheque.png"
              width={50}
              priority
              height={50}
              alt="Immobilier"
            />
          </div>
          <h3>Immobilier</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, debitis!
          </p>
        </div>
        <div className="mines">
          <div className="img">
            <Image
              src="/assets/images/chariot-de-mine.png"
              width={50}
              priority
              height={50}
              alt="image conseil juridique"
            />
          </div>

          <h3>Mines</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, debitis!
          </p>
        </div>

        <div className="transaction">
          <div className="img">
            <Image
              src="/assets/images/transaction.png"
              width={50}
              priority
              height={50}
              alt="image redcation"
            />
          </div>
          <h3>Restructuration , Reformance & Transaction</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, debitis!
          </p>
        </div>
        <div className="ventes">
          <div className="img">
            <Image
              src="/assets/images/ventes-et-marketing.png"
              width={50}
              priority
              height={50}
              alt="image redcation"
            />
          </div>
          <h3>Ventes & Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, debitis!
          </p>
        </div>
        <div className="fusion">
          <div className="img">
            <Image
              src="/assets/images/acquisition.png"
              width={50}
              priority
              height={50}
              alt="image redcation"
            />
          </div>
          <h3>Fusions & acquisitions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis, debitis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertises;
