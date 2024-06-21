import styled from 'styled-components';

export const LoadingDiv = styled.div`
  text-align: center;
  width: 200px;
  margin: 200px auto 0 auto;
`;

export const ErrorDiv = styled.div`
  text-align: center;
  width: 200px;
  margin: 200px auto 0 auto;
`;

export const MainPageCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: 30px auto 50px auto;
  gap: 35px;
  z-index: 1;
`;

export const MainPageCardItem = styled.div`
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 23.5px;
  border-radius: 25px;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

export const CardTopSection = styled.div`
  display: flex;
  @media (min-width: 895px) {
    flex-direction: row;
    gap: 15px;
  }
  @media (max-width: 895px) {
    flex-direction: column;
    gap: 10px;
  }

  margin: 35px 0px 10px 30px;
  gap: 15px;
  align-items: baseline;
`;

export const CardTargetCafe = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #4d2c0e;
`;

export const CardTargetCafeAddress = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 700;
  color: #5d442c;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  margin: auto 35px auto 0px;
`;

export const ReviewCreatedDate = styled.p`
  @media (min-width: 895px) {
    margin: 0px 15px 0px auto;
  }
  @media (max-width: 895px) {
    margin: 0px 15px 0px 0px;
  }

  font-weight: normal;
  font-size: 1rem;
  color: grey;
`;

export const RatingNumber = styled.p`
  margin-left: 12px;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const CardHashtagSection = styled.section`
  display: flex;
  margin: 10px auto auto 28px;
  gap: 10px;
`;

export const CardHashtagItem = styled.div`
  border-width: 2.25pt;

  border-style: solid;

  padding: 3px 13px;
  border-radius: 19px;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;

  background-color: ${({ $color }) => $color};

  border-color: ${({ $color }) => $color};

  p {
    margin: 0;
    cursor: default;
  }
`;

export const CardReviewText = styled.p`
  margin: 20px 30px 20px 32px;

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
