import AdminNav from "@/components/AdminNav";
import useAuth from "@/hooks/useAuth";
import { Button, Textarea, Menu } from "@mantine/core";
import { IoMdAdd } from "react-icons/io";
import moment from "moment";
import { BiDotsVerticalRounded } from "react-icons/bi";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Link from "next/link";
import useData from "@/hooks/useData";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import axios from "@/lib/axios";
import Loading from "@/components/Loading";

const dashboard = () => {
  const [loading, setLoading] = useState(false);
  const { user, isLoadind, logout } = useAuth({ middleware: "auth" });

  //   console.log(user);

  if (isLoadind) {
    return <Loading />;
  }

  //dropzone
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/jpg": [],
        "image/svg": [],
        "image/png": [],
      },
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

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

  const { articles } = useData();



  const handleDelete = (id) => {
    axios.delete(`api/delete/${id}`);
    enqueueSnackbar("Article Supprimé veuillez actualiser la page !", {
      variant: "success",
    });
  };

  return (
    <div className="dashboard">
      {" "}
      <SnackbarProvider hideIconVariant />
      <AdminNav user={user} logout={logout} isLoadind={isLoadind} />
      <div className="diviser"></div>
      <div className="content">
        <div className="header">
          <div className="left">
            <h2>Articles</h2>
            <p>Créer et gérer les articles</p>
          </div>
          <div className="right">
            <Link href="/admin/addArticle">
              <Button
                leftIcon={<IoMdAdd size="1.2rem" />}
                loading={loading}
                onClick={() => setLoading(true)}
                loaderPosition="right"
              >
                Nouvel article
              </Button>
            </Link>
          </div>
        </div>
        <div className="articles-container">
          <ul>
            {articles?.articles
              .sort((a, b) => (a.id < b.id ? 1 : -1))
              .map((article) => (
                <li key={article.id}>
                  <div className="left">
                    <h3>{article.title}</h3>
                    <span className="date">
                      Publié le{" "}
                      {moment(article?.created_at).locale("fr").calendar()}
                    </span>
                  </div>
                  <Menu width={100} shadow="md">
                    <Menu.Target>
                      <div
                        className="right"
                        onClick={() => console.log(article.id)}
                      >
                        <BiDotsVerticalRounded />
                      </div>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item
                        onClick={() => dispatch(setArticleId(article.id))}
                      >
                        <Link
                          id="edit-button"
                          href={{
                            pathname: "/admin/editArticle",
                            query: { id: article.id },
                          }}
                        >
                          Editer
                        </Link>
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item
                        color="red"
                        onClick={() => handleDelete(article.id)}
                      >
                        Supprimer
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
