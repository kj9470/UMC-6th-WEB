import React from 'react'
import styled from "styled-components";

function Welcome() {
  return (
    <>
      <St.WelcomeWrapper>
        <St.Text>환영합니다</St.Text>
      </St.WelcomeWrapper>
    </>
  )
}

export default Welcome

const St = {
  WelcomeWrapper: styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    padding: 200px 0;
    
    justify-content: center;
  `,

  Text: styled.div`
    color: #FFFFFF;
    margin: 0 auto;
    font-size: 40px;
    font-weight: bold;
  `
}