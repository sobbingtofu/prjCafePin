import styled from 'styled-components';

export const MainPageHashtagDropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  margin: 50px auto 0px auto;
  align-items: flex-start;
  position: relative;
  z-index: 2;
`;

export const CurrentHashtagTextContainer = styled.section`
  display: flex;
  justify-content: start;

  min-width: 350px;

  @media (min-width: 900px) {
    gap: 10px;
    flex-direction: row;
    align-items: flex-end;
  }

  @media (max-width: 900px) {
    gap: 5px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AddressText = styled.p`
  font-weight: 900;

  color: #4d2c0e;
  margin: 10px 0 0 0;
  font-size: 1.7rem;
`;

export const PlainTextExitIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  @media (min-width: 900px) {
    gap: 10px;
  }

  @media (max-width: 900px) {
    gap: 5px;
  }
`;

export const PlainText = styled.p`
  font-weight: 700;

  color: grey;
  margin: 10px 0 0 0;
  font-size: 1.4rem;
`;

export const ExitIconContainer = styled.div`
  cursor: pointer;
`;
