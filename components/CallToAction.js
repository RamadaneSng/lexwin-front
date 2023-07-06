import { Button, Center, Group, TextInput, Textarea } from "@mantine/core";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import React, { useEffect, useRef, useState } from "react";
import { notifications } from "@mantine/notifications";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useRouter } from "next/router";
import axios from "@/lib/axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import AOS from "aos";
import "aos/dist/aos.css";


const CallToAction = () => {
  const [choice, setChoice] = useState(true);
  const [sendLoading, setSendLoading] = useState(false);
  const [phoneNumber, setphoneNumber] = useState();
  const form = useRef();
  const router = useRouter();

  const emailRef = useRef();
  const nameRef = useRef();
  const dateRef = useRef();
  const messageRef = useRef();
  const objectRef = useRef();
  const phoneRef = useRef();

  const contactNameRef = useRef();
  const contactEmailRef = useRef();
  const contactMessageRef = useRef();
  const contactObjectRef = useRef();
  // console.log(phoneNumber.length);

  const today = new Date().toISOString().split("T")[0];
  const [dateValue, setDateValue] = useState(today);

  const handleDate = (e) => {
    let day = new Date(e.target.value);
    setDateValue(day.toISOString().split("T")[0]);
  };

   useEffect(() => {
     AOS.init();
   }, []);

  const rdvForm = async (e) => {
    e.preventDefault();
    setSendLoading(true);
    await axios
      .post("/api/test-mail", {
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        object: objectRef.current.value,
        message: messageRef.current.value,
        date: dateRef.current.value,
      })
      .then((res) => {
        e.target.reset();
        setSendLoading(false);
        enqueueSnackbar("Demande de rendez-vous envoyé", {
          variant: "success",
        });
      })
      .catch((err) => {
        setSendLoading(false);
        console.log(err);
        enqueueSnackbar(
          "une erreur s'est produite veuillez remplir correctement tous les champs !",
          { variant: "error" }
        );
      });
  };
  const contactForm = async (e) => {
    e.preventDefault();
    setSendLoading(true);
    const res = await axios
      .post("/api/contact-us", {
        name: contactNameRef.current.value,
        email: contactEmailRef.current.value,
        object: contactObjectRef.current.value,
        message: contactMessageRef.current.value,
      })
      .then((res) => {
        e.target.reset();
        setSendLoading(false);
        enqueueSnackbar("Message envoyé", {
          variant: "success",
        });
        console.log(res);
      })
      .catch((err) => {
        setSendLoading(false);
        console.log(err);
        enqueueSnackbar(
          "une erreur s'est produite veuillez remplir correctement tous les champs !",
          { variant: "error" }
        );
      });
  };

  return (
    <div className="contact-us" data-aos="fade-up" data-aos-duration="3000">
      <SnackbarProvider hideIconVariant />
      <div className="contact-content">
        {router.pathname === "/" && (
          <h2>
            Contactez-<span>nous</span>
          </h2>
        )}
        <Center>
          <div className="contact-us-form">
            <div className="left">
              {router.pathname === "/contact" && (
                <Center>
                  <div className="choice-form">
                    <div
                      className={choice ? "rdv active" : "rdv"}
                      onClick={() => setChoice(true)}
                    >
                      Prendre contact
                    </div>
                    <div
                      className={
                        choice ? "get-in-touch" : "get-in-touch active"
                      }
                      onClick={() => setChoice(false)}
                    >
                      Prendre rendez-vous{" "}
                    </div>
                  </div>
                </Center>
              )}
              {choice ? (
                <form onSubmit={contactForm}>
                  <div className="form-item">
                    <TextInput
                      ref={contactNameRef}
                      placeholder="Nom"
                      radius={0}
                      name="name"
                      required
                    />
                  </div>
                  <TextInput
                    placeholder="Email"
                    radius={0}
                    name="email"
                    ref={contactEmailRef}
                    required
                  />
                  <div className="form-item">
                    <TextInput
                      placeholder="Objet"
                      ref={contactObjectRef}
                      radius={0}
                      name="title"
                      required
                    />
                  </div>

                  <Textarea
                    placeholder="Message"
                    ref={contactMessageRef}
                    name="message"
                    radius={0}
                    className="message"
                    required
                  />
                  <Group position="right">
                    <Button
                      type="submit "
                      radius={0}
                      loading={sendLoading}
                      loaderPosition="right"
                    >
                      Envoyer
                    </Button>
                  </Group>
                </form>
              ) : (
                <form onSubmit={rdvForm} ref={form}>
                  <div className="form-item">
                    <TextInput
                      placeholder="Nom "
                      ref={nameRef}
                      radius={0}
                      required
                      name="name"
                    />
                  </div>
                  <div className="rdv-form-item">
                    <PhoneInput
                      international
                      defaultCountry="CI"
                      ref={phoneRef}
                      name="number"
                      value={phoneNumber}
                      onChange={setphoneNumber}
                      required={true}
                    />
                    <TextInput
                      placeholder="Email"
                      radius={0}
                      required
                      name="email"
                      ref={emailRef}
                    />
                  </div>
                  <div className="rdv-form-item">
                    <TextInput
                      placeholder="Objet"
                      radius={0}
                      required
                      ref={objectRef}
                    />
                    <input
                      type="datetime-local"
                      id="date"
                      ref={dateRef}
                      // value={dateValue}
                      name="date"
                      min={today}
                      onChange={(e) => handleDate(e)}
                      required
                    />
                  </div>
                  <Textarea
                    placeholder="Message"
                    name="message"
                    ref={messageRef}
                    radius={0}
                    className="message"
                  />
                  <Group position="right">
                    <Button
                      type="submit "
                      radius={0}
                      loading={sendLoading}
                      loaderPosition="right"
                    >
                      Prendre rendez-vous
                    </Button>
                  </Group>
                </form>
              )}
            </div>
            <div className="right">
              <div className="color"></div>
              <div className="img">
                <Image
                  src="/assets/images/femme-souriante-ecrivant-notes-appareil-numerique-tablette-removebg-preview.png"
                  width={540}
                  priority
                  height={400}
                  alt="menu soutra"
                />
              </div>
            </div>
          </div>
        </Center>
        <Center>
          {router.pathname === "/contact" && (
            <div className="contact-infos">
              <div className="localisation">
                <span>
                  <div className="title">
                    <GoLocation /> <span> ABIDJAN COCODY</span>
                  </div>
                  <CopyToClipboard text="Abatta , Feu du nouveau Goudron">
                    <p
                      onClick={() => {
                        notifications.show({
                          message: "Adresse copié !",

                          styles: (theme) => ({
                            root: {
                              backgroundColor: "green",

                              border: "none",

                              "&::before": {
                                backgroundColor: theme.white,
                                display: "none",
                              },
                            },

                            position: "top",

                            title: { color: theme.white },
                            description: { color: theme.white },
                            closeButton: {
                              color: theme.white,
                              "&:hover": {
                                backgroundColor: theme.white,
                                color: theme.black,
                              },
                            },
                          }),
                        });
                      }}
                    >
                      {" "}
                      Abatta , Feu du nouveau Goudron{" "}
                    </p>
                  </CopyToClipboard>
                </span>
              </div>
              <div className="tel">
                <span>
                  <div className="title">
                    <BsTelephone /> <span>TEL :</span>
                  </div>
                  <CopyToClipboard text="+225 05 05 01 62 06">
                    <p
                      onClick={() => {
                        notifications.show({
                          message: "Numero de téléphone copié !",

                          styles: (theme) => ({
                            root: {
                              backgroundColor: "green",

                              border: "none",

                              "&::before": {
                                backgroundColor: theme.white,
                                display: "none",
                              },
                            },

                            position: "top",

                            title: { color: theme.white },
                            description: { color: theme.white },
                            closeButton: {
                              color: theme.white,
                              "&:hover": {
                                backgroundColor: theme.white,
                                color: theme.black,
                              },
                            },
                          }),
                        });
                      }}
                    >
                      {" "}
                      +225 05 05 01 62 06
                    </p>
                  </CopyToClipboard>
                </span>
              </div>
              <div className="mail">
                <span>
                  <div className="title">
                    <FiMail /> <span>EMAIL :</span>
                  </div>
                  <CopyToClipboard text="info@lexwin-cabinet.com">
                    <p
                      onClick={() => {
                        notifications.show({
                          message: "email copié !",

                          styles: (theme) => ({
                            root: {
                              backgroundColor: "green",

                              border: "none",

                              "&::before": {
                                backgroundColor: theme.white,
                                display: "none",
                              },
                            },

                            position: "top",

                            title: { color: theme.white },
                            description: { color: theme.white },
                            closeButton: {
                              color: theme.white,
                              "&:hover": {
                                backgroundColor: theme.white,
                                color: theme.black,
                              },
                            },
                          }),
                        });
                      }}
                    >
                      info@lexwin-cabinet.com
                    </p>
                  </CopyToClipboard>
                </span>
              </div>
            </div>
          )}
        </Center>
      </div>
    </div>
  );
};

export default CallToAction;
