import React from "react";
import styled from "styled-components";
import Button from "../../atoms/button/Button";
import Title from "../../atoms/title/Title";

const optionsSec = [
  {
    id: 0,
    number: "01.",
    title: "Employee",
  },
  {
    id: 1,
    number: "02.",
    title: "Advertisment",
  },
  {
    id: 2,
    number: "03.",
    title: "Scooter",
  },
  {
    id: 3,
    number: "04.",
    title: "Car",
  },
  {
    id: 4,
    number: "05.",
    title: "Premises",
  },
];
const optionsClick = [
  {
    id: 0,
    number: "01.",
    title: "Margharita",
  },
  {
    id: 1,
    number: "02.",
    title: "Funghi",
  },
  {
    id: 2,
    number: "03.",
    title: "Capriciosa",
  },
  {
    id: 3,
    number: "04.",
    title: "Hawaii",
  },
  {
    id: 4,
    number: "05.",
    title: "Chicken",
  },
];

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const SecondWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const ClickWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const UpgradePanel = () => {
  return (
    <Wrapper>
      <SecondWrapper>
        <Title titleName="PER SEC" />
        {optionsSec.map(({ id, number, title }) => {
          return <Button key={id} name={number + title} />;
        })}
      </SecondWrapper>
      <ClickWrapper>
        <Title titleName="PER CLICK" />
        {optionsClick.map(({ id, number, title }) => {
          return <Button key={id} name={number + title} />;
        })}
      </ClickWrapper>
    </Wrapper>
  );
};

export default UpgradePanel;
