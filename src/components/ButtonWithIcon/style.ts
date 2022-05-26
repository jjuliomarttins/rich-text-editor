import styled from "styled-components";

export const StyledButton = styled.button`
  width: 35px;
  height: 25px;
  font-size: none;
  background-color: transparent;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  margin: 0.15rem;
  padding: 0.1rem;

  transition: background-color 500ms;

  &:hover {
    background-color: #eeeeee;
  }
`;
