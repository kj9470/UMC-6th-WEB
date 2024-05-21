import React from 'react'
import styled from "styled-components";

const Welcome = () => {
  return (
    <>
      <St.WelcomeWrapper>
        <St.Text>환영합니다</St.Text>
      </St.WelcomeWrapper>
    </>
  );
};

export default Welcome;

const St = {
  WelcomeWrapper: styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    padding: 100px 0;
    
    justify-content: center;
  `,

  Text: styled.div`
    color: #FFFFFF;
    margin: 0 auto;
    font-size: 30px;
    font-weight: bold;
  `
}