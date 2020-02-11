import React from "react";
import styled from "styled-components";
import qs from "qs";
import Button from "../common/Button";

const PaginationBlock = styled.div`
  margin: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0.7rem;
  display: flex;
  width: 360px;
  justify-content: space-between;
`;


const buildLink = ({ page }) => {
  const query = qs.stringify({ page }); // 'page=1' 문자열 형식으로 나온다. parse page:1 형식으로 나온다.
  return `/?${query}`; 
};

const Pagination = ( {page, lastPage }) => {
  return (
    <PaginationBlock>
      <Button
        page
        disabled={page === 1}
        to={
            page === 1 
            ? undefined 
            : buildLink({ page: page - 1 })
        }
      >
        이전
      </Button>
      {page}
      <Button
        page
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({ page: page + 1 })
        }
      >
        다음
      </Button>
    </PaginationBlock>
  );
};

export default Pagination;
