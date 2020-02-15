import React from "react";
import Tags from "../../components/write/Tags";
import { useSelector, useDispatch } from "react-redux";
import { changeField } from "../../modules/write";

const TagsContanier = () => {
  const { tags } = useSelector(({write}) => ({
      tags: write.tags
  }) );
  const dispatch = useDispatch();

  const changeFeild = nextTag => {
    dispatch(
      changeField({
        key: "tags",
        value: nextTag
      })
    );
  };

  return <Tags changeFeild={changeFeild} currentTags={tags} />;
};

export default React.memo(TagsContanier);
