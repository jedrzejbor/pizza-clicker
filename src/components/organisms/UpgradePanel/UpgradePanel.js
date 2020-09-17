import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../atoms/button/Button";
import Title from "../../atoms/title/Title";

// const optionsSec = [
//   {
//     id: 0,
//     number: "01.",
//     title: "Employee",
//     money: 50,
//   },
//   {
//     id: 1,
//     number: "02.",
//     title: "Advertisment",
//     money: 500,
//   },
//   {
//     id: 2,
//     number: "03.",
//     title: "Scooter",
//     money: 5000,
//   },
//   {
//     id: 3,
//     number: "04.",
//     title: "Car",
//     money: 50000,
//   },
//   {
//     id: 4,
//     number: "05.",
//     title: "Premises",
//     money: 500000,
//   },
// ];
// const optionsSec = { money: 50, title: "egurola" };
const optionsClick = [
  {
    id: 0,
    number: "01.",
    title: "Margharita",
    money: 50,
  },
  {
    id: 1,
    number: "02.",
    title: "Funghi",
    money: 500,
  },
  {
    id: 2,
    number: "03.",
    title: "Capriciosa",
    money: 5000,
  },
  {
    id: 3,
    number: "04.",
    title: "Hawaii",
    money: 50000,
  },
  {
    id: 4,
    number: "05.",
    title: "Chicken",
    money: 500000,
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
  const [valueChange, setValueChange] = useState([
    {
      id: 0,
      number: "01.",
      title: "Employee",
      money: 50,
    },
    {
      id: 1,
      number: "02.",
      title: "Advertisment",
      money: 500,
    },
    {
      id: 2,
      number: "03.",
      title: "Scooter",
      money: 5000,
    },
    {
      id: 3,
      number: "04.",
      title: "Car",
      money: 50000,
    },
    {
      id: 4,
      number: "05.",
      title: "Premises",
      money: 500000,
    },
  ]);

  const moreMoney = (index) => (e) => {
    console.log(index);
    console.log(e);
    let newArray = [...valueChange];
    newArray[index].money = newArray[index].money * 5;
    setValueChange(newArray);
  };

  return (
    <Wrapper>
      <SecondWrapper>
        <Title titleName="PER SEC" />
        {valueChange.map((element, index) => {
          return (
            <Button
              nameId={element.title}
              key={element.id}
              name={element.number + " " + element.title + " " + element.money}
              getMoreMoney={moreMoney(index)}
            />
          );
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
