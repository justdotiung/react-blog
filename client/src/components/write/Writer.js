import React from "react";
import styled from "styled-components";
import ScreenHelper from "../common/ScreenHelper";
import EditorContainer from '../../containers/write/EditorContainer';


const WriterBlock = styled(ScreenHelper)`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
`;

const Writer = () => {
  return (
    <WriterBlock>
      <EditorContainer />
    </WriterBlock>
  );
};

export default Writer;
