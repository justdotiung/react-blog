import React from "react";
import styled from "styled-components";
import ScreenHelper from "./ScreenHelper";
import Button from "../common/Button";

const FooterBlock = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-bottom: 0.05rem;
  z-index:2;
  `;

const StyledFooter = styled(Button)`
  background: #0e807b;
  height: 4rem;
  font-size: 2rem;
  `;

const Spacer = styled.div`
  height: 4rem;
`;
const Footer = () => {
  return (
    <>
      <Spacer />
      <FooterBlock>
        <StyledFooter authButton>등록하기</StyledFooter>
      </FooterBlock>
    </>
  );
};

export default Footer;
