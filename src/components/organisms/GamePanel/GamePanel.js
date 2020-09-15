import React from "react";
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
  height: 85%;
  width: 100%;
`;

const PizzaClicker = styled.img`
  height: 50%;
  width: 80%;
`;
const WrapperPizzaStats = styled.div`
  height: 30%;
  width: 100%;
`;
const GamePanel = ({ name, titleName }) => {
  return (
    <Wrapper>
      <WrapperButton>
        <Title titleName="1$ per click" />
        <Title titleName="1$ per second" />
      </WrapperButton>
      <WrapperPizza>
        <PizzaClicker src={pizza} />
        <WrapperPizzaStats>
          <Title titleName="Clicks" />
          <Title titleName="Money" />
        </WrapperPizzaStats>
      </WrapperPizza>
    </Wrapper>
  );
};

export default GamePanel;
