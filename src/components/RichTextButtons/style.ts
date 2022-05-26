import styled from "styled-components";

interface StyledSpanProps {
  hasRightBorder: boolean;
}

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 1rem;
`;

export const StyledSpan = styled.span<StyledSpanProps>`
  border-right: ${(props) =>
    props.hasRightBorder ? "2px solid #9f9f9f" : "none"};
`;
