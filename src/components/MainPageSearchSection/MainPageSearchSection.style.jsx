import styled from 'styled-components';

export const MainPageSearchSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export const CafeSearchInputSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 15px 0px;
  border-width: 2.25pt;
  border-style: solid;
  border-color: #4d2c0e;
  border-radius: 60px;
  width: 50%;
  margin-top: 50px;
  margin-right: 0px;
  input {
    width: 70%;
    border-style: none;
    text-align: center;
    color: #4d2c0e;
    margin-left: auto;
    font-size: 1.1rem;
    font-weight: 700;
    &::placeholder {
      color: #dbc5b1;
      @media (min-width: 660px) {
        font-size: 1.1rem;
      }
      @media (max-width: 660px) {
        font-size: 0.9rem;
      }
    }
    &:focus {
      outline: none;
    }
  }
  img {
    margin-left: auto;
    margin-right: 20px;
  }
`;

export const MapIconContainer = styled.div`
  width: 64px;
  height: 64px;
  margin: auto 0px 0px 52px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.15);
    transition: 0.3s;
  }
`;

export const SearchIconContainer = styled.div`
  margin: auto 20px auto auto;

  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.15);
    transition: 0.3s;
  }
`;
