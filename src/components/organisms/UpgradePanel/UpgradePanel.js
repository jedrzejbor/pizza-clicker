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
  const [valueChangeClick, setValueChangeClick] = useState([
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
  ]);
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

  const moreMoney = (index) => () => {
    console.log(index);
    // console.log(e);
    let newArray = [...valueChange];
    newArray[index].money = Math.round(
      newArray[index].money + (newArray[index].money / 100) * 5
    );
    setValueChange(newArray);
  };

  const moreMoneyClick = (index) => () => {
    console.log(index);
    // console.log(e);
    let newArray = [...valueChangeClick];
    newArray[index].money = Math.round(
      newArray[index].money + (newArray[index].money / 100) * 5
    );
    setValueChangeClick(newArray);
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
        {valueChangeClick.map((element, index) => {
          return (
            <Button
              nameId={element.title}
              key={element.id}
              name={element.number + " " + element.title + " " + element.money}
              getMoreMoney={moreMoneyClick(index)}
            />
          );
        })}
      </ClickWrapper>
    </Wrapper>
  );
};

export default UpgradePanel;
