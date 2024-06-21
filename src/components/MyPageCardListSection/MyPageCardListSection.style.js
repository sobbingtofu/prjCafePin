import styled from 'styled-components';

export const ReviewsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 30px auto 300px auto;
  gap: 35px;

  @media (max-width: 1024px) {
    width: 80%; 
    margin-bottom: 150px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 20px auto;
    gap: 20px;
  }
`;

export const ReviewsHeader = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #4D2C0E;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Reviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 100vh;
`;

export const Review = styled.div`
  position: relative;
  padding-left: 30px;
  width: 100%;
  height: 195px;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 23.5px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    height: auto; /* 화면 크기가 768px 이하일 때 높이 자동 조정 */
  }
`;

export const ReviewDetails = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4D2C0E;
  margin: 50px 0px 10px 30px;
  gap: 15px;
  align-items: baseline;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* 화면 크기가 768px 이하일 때 폰트 크기 조정 */
    margin: 30px 0px 10px 20px; /* 화면 크기가 768px 이하일 때 마진 조정 */
    gap: 10px; /* 화면 크기가 768px 이하일 때 갭 조정 */
  }
`;

export const ReviewContent = styled.p`
  margin: 20px 30px auto 32px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: justify;
  font-size: 1.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  height: 45px;
  line-height: 120%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ReviewRating = styled.div`
  position: absolute;
  top: 25px;
  right: 10px;
  display: flex;
  align-items: center;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 30px 0px 0px;
`;

export const ReviewDate = styled.p`
  margin: 0px 20px 0px 10px;
  font-weight: normal;
  font-size: 1rem;
  color: grey;
`;

export const NoReviewsMessage = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 30px;
  color: #4D2C0E;
`;

export const EditButton = styled.button`
  background-color: #4D2C0E;
  color: white;
  border: none;
  width: 60px;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  right: 120px;
`;


export const DeleteButton = styled.button`
  background-color: #4D2C0E;
  color: white;
  border: none;
  width: 60px;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  right: 50px;
`;
