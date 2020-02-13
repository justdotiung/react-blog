import React, { useEffect } from "react";
import styled from "styled-components";
import ScreenHelper from "./ScreenHelper";

const ModalBlock = styled(ScreenHelper)`
  background: rgba(0,0,0,0.25);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
 opacity: 1;
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
  .button{
    width: 100%;
    display:flex;
    flex-direction:row;
   
    button{
      width:50px;
      margin: auto;
      &:hover{
        color:gray;
      }
    }
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

const Modal = ({ toggle, onToggle, message, onCancel }) => {
  useEffect(() => {}, []);
  return (
    <>
      {toggle && (
        <ModalBlock>
          <ModalBox>
            <div className="span">{message}</div>
            <div className="line" />
            <div className="button">
              {onCancel && <Button onClick={onCancel}>취소</Button>}
              <Button onClick={onToggle}>확인</Button>
            </div>
          </ModalBox>
        </ModalBlock>
      )}
    </>
  );
};

export default Modal;
