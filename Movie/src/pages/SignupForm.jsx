import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgb(49, 49, 82);
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
  background-color: ${({ disabled }) => (disabled ? '#c4c4c4' : '#4caf50')};
  color: #fff;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
`;

const Footer = styled.div`
  margin-top: 20px;
  color: #fff;
`;

const StyledLink = styled.a`
  color: #ffd700;
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  // 값들이 변경될 때마다 호출
  useEffect(() => {
    const validateName = (name) => {
      if (!name.trim()) return "이름을 입력해주세요.";
      return "";
    };

    const validateEmail = (email) => {
      if (!email) return "이메일을 입력해주세요.";
      if (!email.includes('@')) return "이메일 양식에 맞춰주세요.";
      return "";
    };

    const validateAge = (age) => {
      if (!age) return "나이를 입력해주세요.";
      const ageNum = parseFloat(age);
      if (isNaN(ageNum)) return "나이는 숫자로 입력해주세요!";
      if (ageNum < 0) return "나이는 음수가 될 수 없습니다.";
      if (!Number.isInteger(ageNum)) return "나이는 소수가 될 수 없습니다.";
      if (ageNum < 19) return "우리 영화 사이트는 19살 이상만 가입이 가능합니다.";
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

    const validateConfirmPassword = (confirmPassword) => {
      if (confirmPassword !== password) return "비밀번호를 다시 입력해주세요!";
      return "";
    };

    // 유효성 검사
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const ageError = validateAge(age);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    // 오류 메시지 업데이트
    setErrors({
      name: nameError,
      email: emailError,
      age: ageError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

  }, [name, email, age, password, confirmPassword]);

  const handleSubmit = (e) => { // 이벤트 객체
    e.preventDefault(); // 폼의 제출 막음
    // 오류 메시지 모두 비어 있는지 확인
    if (!errors.name && !errors.email && !errors.age && !errors.password && !errors.confirmPassword) {
      // 데이터 유효한 경우 출력
      console.log('폼 데이터:', { name, email, age, password, confirmPassword });
      window.location.href = '/sign-in';
    } else {
      console.log('폼 데이터가 유효하지 않습니다.');
    }
  };

  // 폼 제출 가능 여부 확인
  const isFormValid = () => {
    return (
      !errors.name &&
      !errors.email &&
      !errors.age &&
      !errors.password &&
      !errors.confirmPassword &&
      name.trim() &&
      email &&
      age &&
      password &&
      confirmPassword
    );
  };

  return (
    <Container>
      <Title>회원가입 페이지</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)} // onChange로 에러메시지 상태 업데이트
        />
        {errors.name && <Error>{errors.name}</Error>}
        <Input
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <Error>{errors.email}</Error>}
        <Input
          type="number"
          placeholder="나이를 입력해주세요"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <Error>{errors.age}</Error>}
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <Error>{errors.password}</Error>}
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
        <Button type="submit" disabled={!isFormValid()}>
          제출하기
        </Button>
      </Form>
      <Footer>
        이미 아이디가 있으신가요?
        <StyledLink href="/sign-in">로그인 페이지로 이동하기</StyledLink>
      </Footer>
    </Container>
  );
};

export default SignupForm;
