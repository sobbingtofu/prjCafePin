import React, { useState, useEffect } from 'react';
import supabase from '../../apis/supabase';
import MyPageCardListSection from '../../components/MyPageCardListSection';
import { v4 as uuidv4 } from 'uuid';

import {
  MyPageContainer,
  ProfileSection,
  ProfilePicture,
  Circle,
  EditProfileButton,
  SaveProfileButton,
  Title,
  Label,
  Input,
  Value,
  FileInput
} from './MyPage.style';

// 파일 업로드 함수
const uploadFile = async (file) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${uuidv4()}.${fileExt}`;
  const filePath = `public/${fileName}`;

  const { data: avatarData, error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);

  if (uploadError) {
    console.error('Error uploading file:', uploadError.message);
    return null;
  }

  const { data: publicUrlData, error: urlError } = supabase.storage.from('avatars').getPublicUrl(avatarData.path);

  if (urlError) {
    console.error('Error getting public URL:', urlError.message);
    return null;
  }

  return publicUrlData.publicUrl;
};

function MyPage() {
  const [userProfile, setUserProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase.from('users').select('*').eq('id', user.id).single();

        if (error) {
          console.error('데이터를 가져오는데에 실패했습니다:', error.message);
          return;
        }

        if (data) {
          setUserProfile(data);
          setNickname(data.nickname);
          setEmail(data.email);
          setImage(data.profile_url);
        }
      }
    } catch (error) {
      console.error('사용자 프로필 정보를 가져오는 중 오류가 발생했습니다:', error.message);
    }
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);

    try {
      let profileUrl = image;

      if (image instanceof File) {
        profileUrl = await uploadFile(image);
      }

      const { error: authError } = await supabase.auth.updateUser({
        email
      });

      if (authError) {
        console.error('Auth error:', authError.message);
        throw authError;
      }

      const { data, error } = await supabase
        .from('users')
        .update({
          profile_url: profileUrl,
          nickname
        })
        .eq('id', userProfile.id);

      if (error) {
        console.error('Update error:', error.message);
        throw error;
      }

      if (data) {
        setUserProfile({ ...userProfile, profile_url: profileUrl, nickname, email });
      }
    } catch (error) {
      console.error('프로필 업데이트 중 오류가 발생했습니다:', error.message);
    }
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <MyPageContainer>
      <ProfileSection>
        <ProfilePicture>
          <Title>마이 페이지</Title>
          <Circle>
            <img
              src={
                image
                  ? typeof image === 'string'
                    ? image
                    : URL.createObjectURL(image)
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s'
              }
              alt="프로필 사진"
            />
            {isEditing && (
              <label>
                파일 선택
                <FileInput type="file" onChange={handleImageChange} />
              </label>
            )}
          </Circle>
          {isEditing ? (
            <>
              <Label>
                닉네임
                <Input type="text" value={nickname} onChange={handleNicknameChange} />
              </Label>
              <Label>
                이메일
                <Input type="email" value={email} onChange={handleEmailChange} />
              </Label>
              <SaveProfileButton onClick={handleSaveClick}>저장하기</SaveProfileButton>
            </>
          ) : (
            <>
              <Label>
                닉네임
                <Value>{nickname}</Value>
              </Label>
              <Label>
                이메일
                <Value>{email}</Value>
              </Label>
              <EditProfileButton onClick={handleEditClick}>프로필 수정</EditProfileButton>
            </>
          )}
        </ProfilePicture>
      </ProfileSection>
      {userProfile && <MyPageCardListSection userId={userProfile.id} />}
    </MyPageContainer>
  );
}

export default MyPage;
