import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fff;
`;

export const Container = styled.div`
  width: 324px;
  height: 443px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: #fff;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  margin-left: 10px;
  font-family: 'Playwrite CO', cursive;
  font-size: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 324px;
  height: 443px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
`;

export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 2px;
  margin-left: 20px;
  color: #808080;
`;

export const Input = styled.input`
  width: 324px;
  height: 41px;
  padding: 5px;
  padding-left: 15px;
  margin-bottom: 15px;
  font-size: 14px;
  border: none;
  border-radius: 100px;
  background-color: #efefef;
  color: #808080;
  box-sizing: border-box;
`;

export const H1 = styled.h1`
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
  color: #808080;
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const SocialButton = styled.button`
  width: 324px;
  height: 54px;
  padding: 5px;
  font-size: 20px;
  background-color: #fee500;
  color: #3c1e1e;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  margin-bottom: 2px;

  &:hover {
    background-color: #e6cc00;
  }
`;

export const Button = styled.button`
  width: 324px;
  height: 54px;
  padding: 5px;
  font-size: 20px;
  color: white;
  background-color: #4d2c0e;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  margin-bottom: 2px;

  &:hover {
    background-color: #dbc5b1;
    color: #4d2c0e;
  }
`;

export const SignUpLink = styled(Link)`
  font-size: 15px;
  color: black;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #808080;
  }
`;
