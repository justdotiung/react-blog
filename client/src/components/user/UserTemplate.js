import React from "react";
import styled from "styled-components";

const UserTemplateBlock = styled.div`
  background: white;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    letter-spacing: 5px;
      margin: 2rem;
      text-align:center;
    font-weight: bold;
    font-size:2rem;
    color:#7ac9f5;
  }
`;

const UserForm = styled.div`
  background: white;
  border-radius: 10px;
  border: 1.3px solid #dedede;
  width: 370px;
 
`;

const UserTemplate = ({ children }) => {
  return (
    <UserTemplateBlock>
      <UserForm>
        <div className="logo">BLOG</div>
        {children}
      </UserForm>
    </UserTemplateBlock>
  );
};

export default UserTemplate;
