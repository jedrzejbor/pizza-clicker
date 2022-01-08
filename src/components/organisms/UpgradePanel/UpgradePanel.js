import React from "react";
import styled from "styled-components";
import Title from "../../atoms/title/Title";
import MoneyPerSecForm from '../../../app/moneyPerSec/components/moneyPerSecForm';
import MoneyPerClickForm from '../../../app/moneyPerClick/components/moneyPerClickForm';

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
        <MoneyPerSecForm></MoneyPerSecForm>
      </SecondWrapper>
      <ClickWrapper>
        <Title titleName="PER CLICK" />
        <MoneyPerClickForm></MoneyPerClickForm>
      </ClickWrapper>
    </Wrapper>
  );
};

export default UpgradePanel;

