import React, { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // snow, bubble css 정할수있다.
import styled from "styled-components";
import Toolbar from "./Toolbar";
const EditorBlock = styled.div`
  width: 880px;
`;

const TitleInput = styled.input`
  font-size: 2rem;
  outline: none;
  padding: 0.5rem;
  /* text-align: center; */
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 2rem 0;
  width: 100%;
`;

const QuillWrapper = styled.div`
  /*최소 크기 지정 및 padding 제거 */
  .ql-editor {
    /* padding: 0; */
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  border: none;
  .ql-editor.ql-blank {
  }
`;

const Editor = ({ onChangeField, title, contents }) => {
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정
  const toolbar = useRef("#toolbar");

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "snow",
      placeholder: "내용을 작성하세요...",
      modules: {
        toolbar: toolbar.current
      }
    });

    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        onChangeField({ key: "contents", value: document.querySelector(".ql-editor").innerHTML });
      }
    });
  }, [onChangeField]);

  const onChangeTitle = e => {
    onChangeField({ key: "title", value: e.target.value });
  };
  return (
    <>
      <EditorBlock>
        <Toolbar toolbar={toolbar} />
        <TitleInput
          placeholder="제목을 입력하세요"
          value={title}
          onChange={onChangeTitle}
        />
        <QuillWrapper>
          <div style={{ border: "none" }} ref={quillElement} />
        </QuillWrapper>
      </EditorBlock>
    </>
  );
};

export default Editor;
