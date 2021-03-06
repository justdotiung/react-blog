import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Editor from "../../components/quilleditor/Editor";
import { changeField, initialize } from "../../modules/write";

const EditorContainer = () => {
  const { title, contents } = useSelector(
    ({ write }) => ({
      title: write.title,
      contents: write.contents
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const onChangeField = useCallback(
    payload => {
      dispatch(changeField(payload));
    },
    [dispatch]
  );
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <Editor onChangeField={onChangeField} title={title} contents={contents} />
  );
};

export default React.memo(EditorContainer);
