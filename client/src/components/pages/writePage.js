import React from "react";
import Writer from "../write/Writer";
import Footer from "../write/Footer";
import HeaderContainer from "../../containers/commons/HeaderContainer";
import TagsContanier from "../../containers/write/TagsContanier";

const writePage = () => {
  return (
    <>
      <HeaderContainer writer/>
      <Writer />
      <TagsContanier />
      <Footer />
    </>
  );
};

export default writePage;
