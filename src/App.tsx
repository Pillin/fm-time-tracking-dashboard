import React, { useState } from "react";
import styled from "@emotion/styled";
import UserDetail, { Metric, PrefixMetric } from "./components/UserDetail";
import GithubCard from "./components/GithubCard";
import data from "./data.json";
import { CardType, CardTypeKey } from "./models/CardType";
import "./styles.css";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  @media (min-width: 769px) {
    flex-wrap: wrap;
    height: 540px;
    width: 760px;
  }
`;

export default function App() {
  const [filter, setFilter] = useState<Metric>(Metric.MONTH);

  return (
    <Container>
      <UserDetail
        filter={filter}
        onHandleClick={setFilter}
        name="Jeremy Robson"
        img={{
          mobile: "/images/image-jeremy.png",
          desktop: "/images/image-jeremy.png",
          alt: ""
        }}
      />
      {data.map((elem, index) => (
        <GithubCard
          key={`github-card-${index}`}
          title={elem.title}
          style={{
            ...CardType[elem.title as CardTypeKey],
            prefix: PrefixMetric[filter]
          }}
          current={elem.timeframes[filter].current}
          previous={elem.timeframes[filter].previous}
        />
      ))}
    </Container>
  );
}
