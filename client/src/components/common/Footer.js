import React from "react";
import styled from "styled-components";
import Screen from "./Screen";

const FooterBlock = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-bottom: 0.05rem;
  box-shadow: 0px 10px 2px rgba(0, 0, 255, 0.2);
  `;

const StyledFooter = styled(Screen)`
  background: #0e807b;
  height: 4rem;
  `;
const Spacer = styled.div`
  height: 4rem;
`;
const Footer = () => {
  return (
    <>
      <Spacer />
      <FooterBlock>
        <StyledFooter>푸터</StyledFooter>
      </FooterBlock>
    </>
  );
};

export default Footer;
