import React from "react";
import Writer from "../write/Writer";
import HeaderContainer from "../../containers/commons/HeaderContainer";
import TagsContanier from "../../containers/write/TagsContanier";
import FooterContainer from "../../containers/write/FooterContainer";

const writePage = () => {
  return (
    <>
      <HeaderContainer writer/>
      <Writer />
      <TagsContanier />
      <FooterContainer />
    </>
  );
};

export default writePage;
