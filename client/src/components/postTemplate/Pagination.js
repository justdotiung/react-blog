import React from "react";
import styled from "styled-components";
import qs from "qs";
import Button from "../common/Button";

const PaginationBlock = styled.div``;

const buildLink = ({ name, page }) => {
  const query = qs.stringify({ page }); // 'page=1' 문자열 형식으로 나온다. parse page:1 형식으로 나온다.
  return name ? `/@${name}?${query}` : `/?${query}`; //@name?page=1 
};

const Pagination = ( {page, lastPage, name }) => {
  return (
    <PaginationBlock>
      <Button
        disabled={page === 1}
        to={
            page === 1 
            ? undefined 
            : buildLink({ name, page: page - 1 })
        }
      >
        이전
      </Button>
      {page}
      <Button
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({ name, page: page + 1 })
        }
      >
        다음
      </Button>
    </PaginationBlock>
  );
};

export default Pagination;
