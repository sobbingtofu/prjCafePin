import styled from 'styled-components';

export const PostPageTitleText = styled.p`
  width: 300px;
  margin: 70px auto 50px auto;
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
`;

export const PostPageReviewArea = styled.div`
  width: 75%;
  margin: 0px auto 0px auto;
  height: auto;

  display: flex;

  box-shadow: rgba(0, 0, 0, 0.085) 0px 4px 23.5px;
  border-radius: 25px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

export const ReviewContentsContainer = styled.div`
  width: 90%;
  margin: 40px 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* background-color: red; */

  @media (min-width: 1600px) {
    flex-direction: row;
    gap: 40px;
  }
  @media (max-width: 1600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ReviewRightSection = styled.div`
  width: 40%;
`;

export const CafeNameAndRatingContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: end;
`;

export const ReviewCafeName = styled.p`
  font-size: 1.9rem;
  font-weight: 700;
  color: #4d2c0e;
`;

export const RatingSection = styled.div`
  display: flex;
`;

export const ReviewHashtagSection = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  gap: 10px;
`;

export const ReviewHashtagItem = styled.div`
  background-color: #dbc5b1;
  padding: 7px 15px;
  border-radius: 15px;
  color: white;
  font-weight: 500;
  font-size: 1rem;
`;

export const UserInfoContainer = styled.div`
  margin: 20px 0px 0px 0px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const UserProfilePicture = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  /* border-style: solid;
  border-color: #4d2c0e;
  border-width: 1pt; */
  box-shadow: rgba(0, 0, 0, 0.424) 1px 2px 5px;
`;

export const UserNickname = styled.p`
  font-weight: 500;
  color: #3d3d3d;
`;

export const ReviewText = styled.p`
  margin-top: 20px;

  text-align: justify;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.1rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  height: 190px;

  line-height: 120%;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
`;
