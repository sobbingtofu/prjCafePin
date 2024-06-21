import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container, Title, Form, Label, Input, Button, LoginLink } from './SignUpPage.style';
import supabase from '../../apis/supabase';

const SignUpPage = () => {
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();

    const nickname = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const passwordCofirm = e.target[3].value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nickname) {
      alert('닉네임을 입력하세요');
      return;
    }
    if (nickname.length < 2 || nickname.length > 10) {
      alert('닉네임은 2글자 이상 10글자 이내로 입력하세요');
      return;
    }
    if (!email) {
      alert('이메일을 입력하세요');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('유효한 이메일 주소를 입력하세요');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력하세요');
      return;
    }
    if (password.length < 6) {
      alert('비밀번호는 6자 이상 입력하세요');
      return;
    }
    if (!passwordCofirm) {
      alert('비밀번호 확인을 입력하세요');
      return;
    }
    if (password !== passwordCofirm) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });
    if (error) {
      alert('회원가입을 할 수 없습니다.');
      return;
    } else {
      const userId = data.session.user.id;
      const userEmail = data.session.user.email;

      const { error } = await supabase.from('users').insert({ id: userId, nickname: nickname, email: userEmail });
      if (error) {
        alert('유저테이블에 등록할 수 없습니다.');
      } else {
        alert('회원가입 성공');
        navigate('/auth/login');
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>Cafe Pin</Title>
        <Form onSubmit={handleSignUp}>
          <Label htmlFor="nickname">닉네임</Label>
          <Input type="text" name="nickname" placeholder="닉네임을 입력하세요" />
          <Label htmlFor="email">이메일</Label>
          <Input type="email" placeholder="example@email.com" />
          <Label htmlFor="password">비밀번호</Label>
          <Input type="password" placeholder="비밀번호는 6자 이상 입력하세요" />
          <Label htmlFor="passwordConfirm ">비밀번호 확인</Label>
          <Input type="password" placeholder="비밀번호를 다시 입력하세요" />
          <Button type="submit">가입하기</Button>
          <LoginLink to="/auth/login">이미 가입한 계정이 있으신가요?</LoginLink>
        </Form>
      </Container>
    </Wrapper>
  );
};
export default SignUpPage;
