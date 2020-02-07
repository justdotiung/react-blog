import React from "react";
import Writer from "../write/Writer";
import Tags from "../write/Tags";
import Footer from "../write/Footer";
import HeaderContainer from "../../containers/commons/HeaderContainer";

const writePage = () => {
  return (
    <>
      <HeaderContainer writer/>
      <Writer />
      <Tags />
      <Footer />
    </>
  );
};

export default writePage;
