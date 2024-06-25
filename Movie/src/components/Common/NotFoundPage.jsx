// src/pages/NotFound.jsx
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Body = styled.div`
  padding: 20px;
  background-color: rgb(49, 49, 82);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #ff6347;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Body>
      <Title>Oops!</Title>
      <Message>예상치 못한 에러가 발생했습니다 ;ㅅ;</Message>
      <Message>Not Found</Message>
      <Button onClick={handleGoHome}>메인으로 이동하기</Button>
    </Body>
  );
};

export default NotFoundPage;
