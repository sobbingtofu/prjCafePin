import styled from 'styled-components';

export const AddReviewButton = styled.button`
  width: 120px;
  height: 50px;
  margin-top: 50px;
  margin-left: 0px;

  font-weight: 600;
  font-size: 1rem;
  padding: 5px 10px;

  border-width: 2.25pt;
  border-style: solid;
  border-radius: 40px;
  transition: 0.3s;

  background-color: #dbc5b1;
  border-color: #dbc5b1;
  color: #4d2c0e;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: 0.3s;

    border-color: #4d2c0e;
    background-color: #4d2c0e;
    color: white;
  }
`;
