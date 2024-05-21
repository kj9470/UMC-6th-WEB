import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1d1d42;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 15px;
  margin: 10px 0;
  border: none;
  border-radius: 25px;
  background-color: #f0f0f0;
  font-size: 16px;
  outline: none;
`;

const Button = styled.button`
  width: 320px;
  padding: 15px;
  margin: 20px 0;
  border: none;
  border-radius: 25px;
  background-color: #4caf50;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const Footer = styled.div`
  margin-top: 20px;
  color: #fff;
`;

const Link = styled.a`
  color: #ffd700;
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const SignupForm = () => {
  return (
    <Container>
      <Title>회원가입 페이지</Title>
      <Form>
        <Input type="text" placeholder="이름을 입력해주세요" />
        <Input type="email" placeholder="이메일을 입력해주세요" />
        <Input type="number" placeholder="나이를 입력해주세요" />
        <Input type="password" placeholder="비밀번호를 입력해주세요" />
        <Input type="password" placeholder="비밀번호 확인" />
        <Button type="submit">제출하기</Button>
      </Form>
      <Footer>
        이미 아이디가 있으신가요?
        <Link to="/sign-in">로그인 페이지로 이동하기</Link>
      </Footer>
    </Container>
  );
};

export default SignupForm;
