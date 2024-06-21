import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../apis/supabase';

const OAuthRedirectPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleUser = async (user) => {
      const { id, email, user_metadata } = user;
      if (!user_metadata) {
        return;
      }
      const { full_name, avatar_url } = user_metadata;
      const nickname = full_name;
      if (!nickname) {
        return;
      }

      // 사용자가 이미 존재하는지 확인
      const { data: existingUser, error: selectError } = await supabase.from('users').select('*').eq('id', id).single();

      if (selectError && selectError.code !== 'PGRST116') {
        return;
      }

      if (existingUser) {
        console.log('사용자가 이미 존재합니다:', existingUser);
      } else {
        // 새로운 사용자 삽입
        const { data: insertedUser, error: insertError } = await supabase.from('users').insert({
          id: id,
          email: email,
          nickname: nickname,
          profile_url: avatar_url
        });

        if (insertError) {
          console.error('사용자 삽입 중 오류 발생:', insertError);
        } else {
          console.log('사용자가 성공적으로 삽입되었습니다:', insertedUser);
        }
      }

      // 로그인 완료 후 메인 페이지로 이동
      navigate('/');
    };

    const getUser = async () => {
      const {
        data: { user },
        error
      } = await supabase.auth.getUser();
      if (error) {
        console.error('사용자 정보를 가져오는 중 오류 발생:', error);
        return;
      }

      if (user) {
        await handleUser(user);
      } else {
        console.error('로그인된 사용자가 없습니다.');
      }
    };

    getUser();
  }, [navigate]);

  return <div></div>;
};

export default OAuthRedirectPage;
