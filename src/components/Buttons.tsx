import styled from "@emotion/styled";

export const WhiteButton = styled.button<{ color?: string }>`
  border-style: solid;
  border: 0px;
  padding: 12px 8px;
  width: 120px;
  background-color: transparent;
  font-weight: 400;
  text-align: left;
  color: hsl(236, 100%, 87%);
  text-transform: capitalize;
  &:hover {
    color: white;
  }
  &.active {
    color: white;
  }
`;
