import React, { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // snow, bubble css 정할수있다.
import styled from "styled-components";
import Toolbar from "./Toolbar";
import axios from 'axios';

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
`;

const Editor = ({ onChangeField, title, contents }) => {
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정
  const toolbar = useRef("#toolbar");

  //이미지 핸들러 적용
  const imageHandler = () => {
  
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();

    input.onchange = e => {
      console.log(e.target.files);
      const file = e.target.files[0];

      const formData = new FormData();
      formData.append('img', file);
      
      axios.post('/uploads', formData).then(res => {
        const quill = quillInstance.current;
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', `/upload/${res.data.name}`);
      });
      
    };

    // console.log(quill);
  };

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "snow",
      placeholder: "내용을 작성하세요...",
      modules: {
        toolbar: {
          container: toolbar.current,
          handlers: {
            image: imageHandler
          }
        }
      }
    });

    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        onChangeField({
          key: "contents",
          value: quillInstance.current.root.innerHTML
        });
      }
    });
    quill.on("selection-change", (delta, oldDelta, source) => {
      if (source === "user") {
        onChangeField({
          key: "contents",
          value: quillInstance.current.root.innerHTML
        });
      }
    });
  }, [onChangeField]);

  // componentDidUpdate 만 실행, componentDidMount에서는 X
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    //console.log(quillInstance.current); // quill객체 접근
    quillInstance.current.root.innerHTML = contents; //document.querySelector(".ql-editor").innerHTML 사용해도되지만 document 지양
  }, [contents]);

  const onChangeTitle = e => {
    onChangeField({ key: "title", value: e.target.value });
  };
  return (
    <>
      <EditorBlock>
        <Toolbar toolbar={toolbar} />
        {/* <input type="file" ref={fileEl}  multiple/> */}
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
