import React from "react";
import Writer from "../write/Writer";
import HeaderContainer from "../../containers/commons/HeaderContainer";
import TagsContanier from "../../containers/write/TagsContanier";
import FooterContainer from "../../containers/write/FooterContainer";
import { Helmet } from 'react-helmet-async';
const writePage = () => {
  return (
    <>
     <Helmet>
      <title>글쓰기</title>
    </Helmet>
      <HeaderContainer writer/>
      <Writer />
      <TagsContanier />
      <FooterContainer />
    </>
  );
};

export default writePage;
