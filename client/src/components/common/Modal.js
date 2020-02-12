import React, { useEffect } from "react";
import styled from "styled-components";
import ScreenHelper from "./ScreenHelper";

const ModalBlock = styled(ScreenHelper)`
  background: #ccc;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  position: fixed;
  width: 320px;
  height: 100px;
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .span {
    margin: auto;
    font-size: 1.5rem;
  }
  .line {
    border-bottom: 1px solid #ccc;
    width: 100%;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  outline: none;
  width: 100%;
  padding: 0.4rem;
  font-size: 1rem;
  background: white;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
`;

const Modal = ({ toggle, onToggle, message }) => {
  useEffect(() => {
  },[]);
  return (
    <>
      {toggle && (
        <ModalBlock>
          <ModalBox>
            <div className="span">{message}</div>
            <div className="line" />
            <Button onClick={onToggle}>확인</Button>
          </ModalBox>
        </ModalBlock>
      )}
    </>
  );
};

export default Modal;
