import styled from 'styled-components';

export const HashtagSelectionSection = styled.section`
  display: grid;

  @media (min-width: 1790px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
  }

  @media (max-width: 1790px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  @media (max-width: 895px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  width: 50%;
  min-width: 300px;
  margin: 30px auto 0px auto;

  &:hover {
    cursor: pointer;
  }
`;

export const HashtagSelectionItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 20px;
  border-width: 2.25pt;
  border-style: solid;
  border-color: #4d2c0e;
  border-radius: 60px;
  color: #4d2c0e;
  font-weight: 700;

  background-color: ${({ $onOff }) => {
    return $onOff == true ? '#4d2c0e' : 'none';
  }};

  color: ${({ $onOff }) => {
    return $onOff == true ? 'white' : '#4d2c0e';
  }};

  transition: 0.3s;

  &:hover {
    background-color: ${({ $onOff }) => {
      return $onOff == true ? '#4d2c0e' : '#dbc5b1;';
    }};
  }
`;
