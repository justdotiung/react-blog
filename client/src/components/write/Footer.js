import React from "react";
import styled, { css } from "styled-components";
import ScreenHelper from "../common/ScreenHelper";
import ModalContainer from "../../containers/commons/ModalContainer";

const FooterBlock = styled(ScreenHelper)`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 2;
`;

const Button = styled.button`
  font-size: 0.9rem;
  outline: none;
  border: none;
  border: 1px solid #ccc;
  background: white;
  border-radius: 50px;
  font-weight: 600;
  padding: 8px 1.5rem;

  :hover {
    cursor: pointer;
    background: #ff9e9e;
  }
  & + & {
    margin-left: 1rem;
  }
  ${props =>
    props.black &&
    css`
      background: black;
      color: white;
      :hover {
        background: #ac9eff;
      }
    `}
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  padding-right: 2rem;
  padding-top: 1rem;
`;

const StyledFooter = styled.div`
  background: #f0f0f0;
  height: 4rem;
  display: flex;
  margin-left: auto;
`;

const Footer = ({ onSubmit, postError, onCancel }) => {
  return (
    <>
      {postError && <ModalContainer />}
      <FooterBlock>
        <StyledFooter>
          <ButtonWrapper>
            <Button onClick={onCancel}>취소</Button>
            <Button black onClick={onSubmit}>
              완료
            </Button>
          </ButtonWrapper>
        </StyledFooter>
      </FooterBlock>
    </>
  );
};

export default Footer;
