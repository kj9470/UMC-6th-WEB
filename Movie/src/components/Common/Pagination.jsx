import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

const PageButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ disabled }) => (disabled ? '#aaa' : '#fff')};
  padding: 10px 20px;
  margin: 0 10px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  &:hover {
    color: ${({ disabled }) => (disabled ? '#aaa' : '#FFD400')};
  }
`;

const PageNumber = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousClick = () => {
    if (currentPage === 1) {
      alert("가장 첫번째 페이지입니다.");
    } else {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage === totalPages) {
      alert("가장 마지막 페이지입니다.");
    } else {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationWrapper>
      <PageButton
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        &lt;
      </PageButton>
      <PageNumber>{currentPage}</PageNumber>
      <PageButton
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        &gt;
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
