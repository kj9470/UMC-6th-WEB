import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: rgb(49, 49, 82);
  padding-top: 100px;
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
  background-color: ${({ isValid }) => (isValid ? '#4caf50' : '#c4c4c4')};
  color: #fff;
  font-size: 16px;
  cursor: ${({ isValid }) => (isValid ? 'pointer' : 'not-allowed')};
  transition: background-color 0.3s;
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const validateUsername = (username) => {
      if (!username.trim()) return "아이디를 입력해 주세요.";
      if (!/^[a-zA-Z0-9]+$/.test(username)) return "아이디는 문자와 숫자만 포함할 수 있습니다.";
      return "";
    };

    const validatePassword = (password) => {
      if (!password) return "비밀번호를 입력해주세요.";
      if (password.length < 4) return "비밀번호는 최소 4자리 이상이어야 합니다.";
      if (password.length > 12) return "비밀번호는 최대 12자리까지 가능합니다.";
      if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        return "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
      }
      return "";
    };

    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);

    setErrors({
      username: usernameError,
      password: passwordError,
    });
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!errors.username && !errors.password) {
      console.log('로그인 데이터:', { username, password });
      // 로그인 로직 추가
    } else {
      console.log('로그인 데이터가 유효하지 않습니다.');
    }
  };

  const isFormValid = () => {
    return (
      !errors.username &&
      !errors.password &&
      username.trim() &&
      password
    );
  };

  return (
    <Container>
      <Title>로그인 페이지</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="아이디를 입력해 주세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {isSubmitted && errors.username && <Error>{errors.username}</Error>}
        <Input
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSubmitted && errors.password && <Error>{errors.password}</Error>}
        <Button type="submit" isValid={isFormValid()}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default SignInPage;
