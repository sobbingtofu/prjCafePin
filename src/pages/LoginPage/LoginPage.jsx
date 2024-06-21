import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  Container,
  Title,
  Form,
  Label,
  Input,
  H1,
  SocialLoginContainer,
  SocialButton,
  Button,
  SignUpLink
} from './LoginPage.style';
import KakaotalkLogo from '../../components/common/Icon/KakaotalkLogo';
import supabase from '../../apis/supabase';
import { logInWithKakao } from '../../apis/OAuthPage.api';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value.trim();
    const password = e.target[1].value.trim();

    if (!email) {
      alert('이메일을 입력하세요');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력하세요');
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error || !data) {
      alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
      return;
    }

    alert('로그인 성공');
    navigate('/');
  };

  return (
    <Wrapper>
      <Container>
        <Title>Cafe Pin</Title>
        <Form onSubmit={handleLogin}>
          <Label htmlFor="email">이메일</Label>
          <Input type="text" name="email" placeholder="example@email.com" required />
          <Label htmlFor="password">비밀번호</Label>
          <Input type="password" name="password" placeholder="비밀번호는 6자 이상 입력하세요" required />
          <H1>SNS 로그인</H1>
          <SocialLoginContainer>
            <SocialButton onClick={logInWithKakao}>
              <KakaotalkLogo />
            </SocialButton>
          </SocialLoginContainer>
          <Button type="submit">로그인</Button>
          <SignUpLink to="/auth/sign-up">아직 회원이 아니신가요?</SignUpLink>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;
