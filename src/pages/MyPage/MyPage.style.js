import styled from 'styled-components';

export const MyPageContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin: 0 auto;
`;

export const ProfileSection = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  padding: 20px;
  border-right: 3px solid rgba(128, 128, 128, 0.3);
  box-sizing: border-box;
  height: 100vh; /* 전체 높이를 차지하도록 설정 */

  @media (max-width: 768px) {
    width: 100%; /* 화면이 작아질 경우 전체 너비를 차지하도록 설정 */
    border-right: none; /* 작은 화면에서는 우측 경계선 제거 */
    border-bottom: 3px solid rgba(128, 128, 128, 0.3); /* 하단 경계선 추가 */
    height: auto; /* 작은 화면에서는 높이 자동 설정 */
  }
`;


export const ProfilePicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Circle = styled.div`
  width: 150px;
  height: 150px;
  background-color: #dcdcdc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  label {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #4d2c0e;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const EditProfileButton = styled.button`
  background-color: #4d2c0e;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
`;

export const SaveProfileButton = styled.button`
  background-color: #4d2c0e;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: #efefef;
  width: 80%;
  height: 10px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%; /* 화면이 작아질 경우 전체 너비를 차지하도록 설정 */
  }
`;

export const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Value = styled.p`
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
`;

export const FileInput = styled.input`
  display: none;
`;
