import React, { useState } from "react";
import styled from "styled-components";
import Title from "../../atoms/title/Title";
import pizza from "../../../images/pizza.png";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const WrapperButton = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const WrapperPizza = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PizzaClicker = styled.img`
  height: 50%;
  width: 80%;
`;
const WrapperPizzaStats = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const WrapperOneStat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Number = styled.p``;

const GamePanel = () => {
  const [valueClicks, setValueClicks] = useState(0);
  const [valueMoney, setValueMoney] = useState(0);
  return (
    <Wrapper>
      <WrapperButton>
        <Title titleName="1$ per click" />
        <Title titleName="1$ per second" />
      </WrapperButton>
      <WrapperPizza>
        <PizzaClicker
          src={pizza}
          onClick={() => {
            setValueClicks(valueClicks + 1);
            setValueMoney(valueMoney + 1);
          }}
        />
      </WrapperPizza>
      <WrapperPizzaStats>
        <WrapperOneStat>
          <Title titleName="Clicks" />
          <Number>{valueClicks}</Number>
        </WrapperOneStat>
        <WrapperOneStat>
          <Title titleName="Money" />
          <Number>{valueMoney}</Number>
        </WrapperOneStat>
      </WrapperPizzaStats>
    </Wrapper>
  );
};

export default GamePanel;
