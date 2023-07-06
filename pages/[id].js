// import Nav from "@/components/Nav";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import moment from "moment";
// import "moment/locale/fr";
// import Footer from "@/components/Footer";
// import { MdKeyboardArrowLeft } from "react-icons/md";
// import { Badge } from "@mantine/core";
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   TwitterShareButton,
//   TwitterIcon,
//   LinkedinShareButton,
//   LinkedinIcon,
//   WhatsappShareButton,
//   WhatsappIcon,
// } from "next-share";

// const artcile = ({ article }) => {
//   return (
//     <div className="article-page">
//       <Nav />
//       <div className="diviser"></div>
//       <div className="content">
//         <div className="left">
//           <Link href={"/news"}>
//             <span className="arrow-left">
//               <MdKeyboardArrowLeft />
//             </span>
//             <span>Voir tous les articles</span>
//           </Link>
//         </div>
//         <div className="right">
//           <span className="date">
//             Publié le {moment(article?.created_at).locale("fr").calendar()}
//           </span>
//           <div className="domain">
//             {" "}
//             <Badge className="badge" radius={4}>
//               {article.domain}
//             </Badge>
//           </div>
//           <h3>{article.title}</h3>
//           <div className="img">
//             <Image
//               loader={() => `http://127.0.0.1:8000/${article?.image}`}
//               src={article.image && `http://127.0.0.1:8000/${artcile?.image}`}
//               width={500}
//               priority
//               height={350}
//               alt="menu soutra"
//             />
//           </div>
//           <p className="body">{article.content}</p>
//         </div>
//       </div>
//       <div className="share">
//         <p>partager cet article</p>
//         <div className="share-to">
//           <FacebookShareButton
//             url={"https://laravel.com/docs/10.x/mail#configuration"}
//             title={article?.title}
//             quote={article?.title}
//             hashtag={"#Lexwin"}
//           >
//             <FacebookIcon size={32} round />
//           </FacebookShareButton>
//           <TwitterShareButton
//             url={"https://github.com/next-share"}
//             title={article?.title}
//             quote={article?.title}
//             hashtag={"#Lexwin"}
//           >
//             <TwitterIcon size={32} round />
//           </TwitterShareButton>
//           <LinkedinShareButton
//             url={"https://github.com/next-share"}
//             title={article?.title}
//             quote={article?.title}
//             hashtag={"#Lexwin"}
//           >
//             <LinkedinIcon size={32} round />
//           </LinkedinShareButton>
//           <WhatsappShareButton
//             url={"https://github.com/next-share"}
//             title={article?.title}
//             separator=":: "
//           >
//             <WhatsappIcon size={32} round />
//           </WhatsappShareButton>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default artcile;

// export const getStaticProps = async (context) => {
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/article/${context.params.id}`
//   );

//   const article = res.data.article;

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles`
//   );

//   const articles = res.data.articles;

//   const ids = articles.map((article) => article.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
