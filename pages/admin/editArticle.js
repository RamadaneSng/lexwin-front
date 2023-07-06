import { useDropzone } from "react-dropzone";
import { Button, Textarea } from "@mantine/core";
import { IoImageOutline } from "react-icons/io5";
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";
import { Select } from "@mantine/core";
import useAuth from "@/hooks/useAuth";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React, { useRef, useState } from "react";
import Link from "next/link";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import useData from "@/hooks/useData";

const editArticle = () => {
  const { user, isLoadind, logout } = useAuth({ middleware: "auth" });
  const [image, setImage] = useState();
  const router = useRouter();
  const id = router.query?.id;

  console.log(id);
  //dropzone
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/jpg": [],
        "image/svg": [],
        "image/png": [],
      },
      onDrop: (files) => setImage(files[0]),
    });

  //articles states
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const titleRef = useRef();
  const domainRef = useRef();
  const contentRef = useRef();
  const imageRef = useRef();

  //   const im

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  //   console.log(acceptedFiles[0]);

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  //dropzone

  const editArticle = async () => {
    setImage(acceptedFiles[0]);

    const title = titleRef.current.value;
    const domain = domainRef.current.value;
    // const image = imageRef.current.files[0];
    const content = contentRef.current.value;

    // console.log(title, domain , content);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("domain", domain);
    formData.append("image", image);
    formData.append("content", content);
    formData.append("_method", "PATCH");

    console.log(image);

    try {
      const response = await axios.post(`/api/update/${id}`, formData);

      if (response.data.status === 200) {
        enqueueSnackbar("Article Edité", {
          variant: "success",
        });
        formRef.current.reset();
      } else {
        enqueueSnackbar(
          "une erreur s'est produite veuillez remplir correctement tous les champs !",
          { variant: "error" }
        );
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const { articles } = useData();

  // console.log(articles);

  const currentArticle = articles?.articles.filter((el) => el.id == id);

  let currentTitle;
  let currentContent;
  let currentDomain;
  let currentImage;

  if (typeof currentArticle !== "undefined") {
    currentTitle = currentArticle[0]?.title;
    currentContent = currentArticle[0]?.content;
    currentDomain = currentArticle[0]?.domain;
  }

  const [domain, setDomain] = useState(currentDomain);

  return (
    <div className="dashboard">
      <SnackbarProvider hideIconVariant />
      {/* <AdminNav user={user} logout={logout} isLoadind={isLoadind} /> */}
      <div className="add-article-header">
        <div className="back">
          <Link href="/admin/dashboard">
            <span>
              <FiChevronLeft />
            </span>
            <p>retour</p>
          </Link>
        </div>
        <Button onClick={editArticle}>Editer</Button>
      </div>

      <div className="content">
        <div className="add-article">
          {/* <form onSubmit={editArticle}> */}
          <Textarea
            id="title-input"
            defaultValue={currentTitle}
            variant="unstyled"
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
            autosize
            // minRows={2}
            placeholder="Titre de l'article"
          ></Textarea>
          <section className="dropzone-container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} ref={imageRef} />
              <div className="drop-text">
                <div className="icon">
                  <IoImageOutline />
                </div>
                <div className="info">
                  <p>
                    Glisser-déposer l'image ici, ou cliquer pour sélectionner
                    une image
                  </p>
                  <em>(png , jpeg , svg,)</em>
                </div>
              </div>
            </div>
            <aside>
              <ul>{acceptedFileItems}</ul>
            </aside>
          </section>

          {/* <input type="file" ref={imageRef} /> */}
          <Select
            id="select"
            placeholder="Selectionner le type d'article"
            rightSection={<FiChevronDown size="1rem" />}
            rightSectionWidth={30}
            // defaultValue={currentDomain}
            // value={domainRef.current.value}
            // onChange={setDomain}
            // onChange={(e) => setDomain(e.target.value)}
            ref={domainRef}
            styles={{ rightSection: { pointerEvents: "none" } }}
            data={[
              "INTERVIEWS",
              "PÉNAL",
              "JUSTICE",
              "PROFESSIONS",
              "FISCAL / FINANCES",
            ]}
          />
          <Textarea
            onChange={(e) => setContent(e.target.value)}
            ref={contentRef}
            id="body"
            defaultValue={currentContent}
            variant="unstyled"
            autosize
            // minRows={2}
            placeholder="contenu de l'article"
          ></Textarea>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default editArticle;
