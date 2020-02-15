import React from "react";
import styled from "styled-components";

const ToolbarBlock = styled.div`
  margin-top: 2rem;

  .ql-toolbar.ql-snow {
    width: 400px;
    margin: auto;
    display: flex;
    justify-content: center;
    border-radius: 50px;
    /* border: none; */
  }
  .ql-picker-item {
    border: none;
    border-radius: 5px;

    :hover {
      opacity: 0.6;
    }
  }
`;

const Toolbar = () => {
  return (
    <ToolbarBlock>
      <div id="toolbar">
        <select
          className="ql-header"
          defaultValue={""}
          onChange={e => e.persist()}
        >
          <option value="1" />
          <option value="2" />
        </select>
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
        <select className="ql-color">
          <option value="black" />
          <option value="red" />
          <option value="green" />
          <option value="blue" />
          <option value="orange" />
          <option value="violet" />
          <option value="white" />
          <option value="#8a66ed" />
          <option value="#d0d1d2" />
        </select>
        <button className="ql-image" />
        <button className="ql-link" />
      </div>
    </ToolbarBlock>
  );
};

export default React.memo(Toolbar);
