import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import Title from "../../atoms/title/Title";
import MoneyCounterPerClick from "../../../app/moneyPerClick/components/moneyCounterPerClick";
import MoneyCounterPerSecForm from "../../../app/moneyPerSec/components/moneyCounterPerSecForm";
import MoneyShow from "../../../app/moneyGlobal/components/moneyShow";
import pizza from "../../../images/pizza.png";
import actionsMoney from '../../../app/moneyGlobal/duck/actions';

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

const GamePanel = ({moneyPerClick, moneyPerSec, additionMoney}) => {
  const [valueClicks, setValueClicks] = useState(0);


  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      additionMoney(parseInt(moneyPerSec.counter_data.toFixed(2)))
    }, 1000);

    return () => clearInterval(interval);
  },[moneyPerSec.counter_data.toFixed(2)])

  return (
    <Wrapper>
      <WrapperButton>
        {/* <Title titleName="1$ per click" /> */}
        {/* <Title titleName="1$ per second" /> */}
        <MoneyCounterPerSecForm />
        <MoneyCounterPerClick />
      </WrapperButton>
      <WrapperPizza>
        <PizzaClicker
          src={pizza}
          onClick={() => {
            setValueClicks(valueClicks + 1);
            additionMoney(parseInt(moneyPerClick.counter_data.toFixed(2)));
          }}
        />
      </WrapperPizza>
      <WrapperPizzaStats>
        <WrapperOneStat>
          <Title titleName="Clicks" />
          <Number>{valueClicks}</Number>
        </WrapperOneStat>
        <MoneyShow/>
      </WrapperPizzaStats>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  moneyPerClick: state.moneyPerClick,
  moneyPerSec: state.moneyPerSec
})

const mapDispatchToProps = dispatch => ({
  additionMoney: value => dispatch(actionsMoney.additionMoney(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePanel);
