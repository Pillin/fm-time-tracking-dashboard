import React from "react";
import styled from "@emotion/styled";
import { IMG } from "./Image";
import { H2, P } from "./Typography";
import { WhiteButton } from "./Buttons";

export enum Metric {
  DAY = "daily",
  MONTH = "monthly",
  WEEK = "weekly"
}

export const PrefixMetric = {
  [Metric.DAY]: (name: number) => `Yesterday - ${name}hrs`,
  [Metric.MONTH]: (name: number) => `Last Month - ${name}hrs`,
  [Metric.WEEK]: (name: number) => `Last Week - ${name}hrs`
} as const;

const Container = styled.section`
  width: 180px;
  margin: 8px;
`;

const FilterContainer = styled.section`
  padding: 16px;
  background-color: hsl(235, 46%, 20%);
  display: flex;
  justify-content: center;
  @media (min-width: 769px) {
    flex-direction: column;
  }
`;

const UserContainer = styled.section`
  background-color: hsl(246, 80%, 60%);
  padding: 16px;
  border-radius: 15px;
`;

const imageUserStyle = {
  width: "80px",
  display: "block",
  height: "80px",
  border: "2px solid white",
  borderRadius: "50%"
};

const UserDetail = (props: {
  name: string;
  filter: string;
  img: {
    mobile: string;
    desktop: string;
    alt: string;
  };
  onHandleClick: (value: Metric) => void;
}) => {
  return (
    <Container>
      <UserContainer>
        <IMG {...props.img} style={imageUserStyle} />
        <P margin="36px 0px 0px 0px">Report for</P>
        <H2>{props.name}</H2>
      </UserContainer>
      <FilterContainer>
        <WhiteButton
          onClick={() => props.onHandleClick(Metric.DAY)}
          className={`${props.filter === Metric.DAY && "active"}`}
        >
          {Metric.DAY}
        </WhiteButton>
        <WhiteButton
          onClick={() => props.onHandleClick(Metric.WEEK)}
          className={`${props.filter === Metric.WEEK && "active"}`}
        >
          {Metric.WEEK}
        </WhiteButton>
        <WhiteButton
          onClick={() => props.onHandleClick(Metric.MONTH)}
          className={`${props.filter === Metric.MONTH && "active"}`}
        >
          {Metric.MONTH}
        </WhiteButton>
      </FilterContainer>
    </Container>
  );
};

export default UserDetail;
