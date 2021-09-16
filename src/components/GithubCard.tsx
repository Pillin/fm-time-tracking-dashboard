import React from "react";
import styled from "@emotion/styled";
import { H1, H3, P } from "./Typography";
import { IMG } from "./Image";

const Container = styled.section`
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: hsl(235, 46%, 20%);
  width: 180px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  h3,
  span {
    width: 50%;
    margin: 0px;
  }
  h1,
  p {
    width: 50%;
    margin: 0px;
  }
  @media (min-width: 769px) {
    h3,
    span {
      width: 50%;
      margin: 0px;
    }
    h1,
    p {
      width: 100%;
      margin: 0px;
    }
  }
  &:hover {
    background-color: #444982;
  }
`;

const Wrapper = styled.section<{ backgroundColor: string }>`
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 180px;
  height: 190px;
  padding: 8px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
  margin: 8px 4px;
  overflow: hidden;
`;

const GithubCard = (props: {
  title: string;
  current: number;
  previous: number;
  style: {
    backgroundColor: string;
    iconUrl: string;
    prefix: (val: number) => string;
  };
}) => {
  return (
    <Wrapper backgroundColor={props.style.backgroundColor}>
      <IMG
        mobile={props.style.iconUrl}
        desktop={props.style.iconUrl}
        alt=""
        style={{
          display: "block",
          width: "50px",
          position: "absolute",
          top: "-7px"
        }}
      />
      <Container>
        <H3>{props.title}</H3>
        <span></span>
        <H1>{`${props.current}hrs`}</H1>
        <P>{props.style.prefix(props.previous)}</P>
      </Container>
    </Wrapper>
  );
};

export default GithubCard;
