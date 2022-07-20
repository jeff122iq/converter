import styled from "styled-components";

interface ButtonProps {
  readonly background?: string;
}

export const Button = styled.div<ButtonProps>`
  background: ${({ background }) => background};
  padding: 10px;
  color: #ffffff;
  cursor: pointer;
`;
