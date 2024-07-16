import React from 'react';
import styled from 'styled-components';
import CartContainer from './components/CartContainer';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
`;

const AppHeader = styled.header`
  background-color: #007bff;
  color: white;
  padding: 20px 0;
`;

const AppTitle = styled.h1`
  margin: 0;
`;

const App = () => {
  return (
    <AppContainer>
      <AppHeader>
        <AppTitle>UMC PlayList</AppTitle>
      </AppHeader>
      <CartContainer />
    </AppContainer>
  );
};

export default App;
