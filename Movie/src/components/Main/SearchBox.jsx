import React, { useState } from 'react';
import styled from "styled-components";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 검색을 실행하는 코드를 추가합니다.
    console.log("검색어:", searchTerm);
  };

  return (
    <>
      <St.SearchWrapper>
        <St.SearchView>
          <St.SearchLabel>🎥 Find your movies !</St.SearchLabel>
          <St.Form onSubmit={handleSubmit}>
            <St.Input
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="영화를 검색하세요..."
            />
            <St.Button type="submit">🔍</St.Button>
          </St.Form>
        </St.SearchView>
      </St.SearchWrapper>
    </>
  );
};

const St = {
  SearchWrapper: styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(83, 83, 134);
    padding: 400px 0;
  `,

  SearchView: styled.div`
    margin-top: -300px;
  `,

  SearchLabel: styled.div`
    margin-bottom: 20px;
    color: #FFFFFF;
    font-size: 40px;
    font-weight: bold;
  `,

  Form: styled.form`
    display: flex;
    align-items: center;
  `,

  Input: styled.input`
    padding: 10px;
    margin-right: 10px;
    border: none;
    border-radius: 30px;
    width: 400px;
    height: 40px;
  `,

  Button: styled.button`
    padding: 10px;
    background-color: #FFFFFF;
    color: #FFFFFF;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 40px;
    height: 40px;
  `,
};

export default SearchBox;
