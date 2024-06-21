import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../apis/user.api';
import { fetchUserData } from '../../redux/slices/userSlice';
import { Item, Wrapper } from './SelectBox.style';

function SelectBox() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.user.userData);

  const { mutateAsync: logout } = useMutation({
    mutationFn: async () => await logoutUser(),
    onSuccess: () => {
      dispatch(fetchUserData({}));
      queryClient.invalidateQueries(['user']);
    }
  });

  const handleClick = (e) => {
    const path = e.target.id;
    if (path == '') {
      return logout();
    }
    navigate(path);
  };

  return (
    <Wrapper>
      {user.id ? (
        <>
          <Item className="first" id="my-page" onClick={handleClick}>
            마이페이지
          </Item>
          <Item className="second" id="" onClick={handleClick}>
            로그아웃
          </Item>
        </>
      ) : (
        <>
          <Item className="first" id="auth/sign-up" onClick={handleClick}>
            회원가입
          </Item>
          <Item className="second" id="auth/login" onClick={handleClick}>
            로그인
          </Item>
        </>
      )}
    </Wrapper>
  );
}

export default SelectBox;
