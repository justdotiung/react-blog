import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // snow, bubble css 정할수있다.
import styled from 'styled-components';

const EditorBlock = styled.div`
  /* 페이지 위아래 여백 지정 */
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  margin-bottom: 2rem;
  width: 100%;
`;

const QuillWrapper = styled.div`
  /*최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  #toolbar {
  background: #eaecec;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border: 1px solid #ccc;
  padding: 0.75em;
}
.ql-toolbar {
  background: #eaecec;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
}
.ql-container {
  min-height: 10em;
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  background: #fefcfc;
  border: 1px solid #ccc;
  border-top: 0;
}
`;

const Editor = ({ title, body, onChangeField }) => {
    const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
    const quillInstance = useRef(null); // Quill 인스턴스를 설정
    
    useEffect(() => {
      quillInstance.current = new Quill(quillElement.current, {
        theme: 'snow',
        placeholder: '내용을 작성하세요...',
        modules: {
          //더많은 옵션
          //https//quilljs.com/docs/modules/toolbar/ 참고
          toolbar: [
            [{ header: '1' }, { header: '2' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote', 'code-block', 'link', 'image'],
          ],
        },
      });

      //quill에 text-change 이벤트 핸들러 등록
      //참고: https//quilljs.com/docs/api/#events
      const quill = quillInstance.current;

    },[]);

    const mounted = useRef(false);
    useEffect(() => {
      if( mounted.current) return;
      mounted.current = true;
      
      //quillInstance.current.root.innerHTML = body;
    }, []);

    const onChangeTitle = e => {
     //   onChangeField({key: 'title', value: e.target.value});
    }
  return (
    <EditorBlock>
      <TitleInput placeholder="제목을 입력하세요" 
      onChange={onChangeTitle}
      value={title}
      />
      <QuillWrapper >
      <div ref={quillElement} />
      

    
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
