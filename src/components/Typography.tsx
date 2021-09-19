import styled from "@emotion/styled";

export const P = styled.p<{ margin?: string }>`
  color: hsl(236, 100%, 87%);
  margin: ${({ margin }) => margin || "0px"};
  font-weight: 300;
  font-size: 0.56em;
  @media (min-width: 769px) {
    font-size: 12px;
  }
`;

export const H1 = styled.h1`
  color: hsla(0, 0%, 100%, 0.75);
  font-weight: 300;
  margin: 0px;
  font-size: 1.4rem;
  @media (min-width: 769px) {
    font-size: 2rem;
  }
`;
export const H2 = styled.h2`
  color: hsla(0, 0%, 100%, 0.75);
  font-weight: 300;
  margin: 0px 0px;
  font-size: 2rem;
`;

export const H3 = styled.h3`
  color: hsla(0, 0%, 100%, 0.75);
  font-size: 0.8em;
  font-weight: 500;
  @media (min-width: 769px) {
    font-size: 1em;
  }
`;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
