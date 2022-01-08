import React from 'react';
import { connect } from 'react-redux';
import Title from "../../../components/atoms/title/Title";
import styled from "styled-components";

const WrapperOneStat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Number = styled.p``;

const moneyShow = ({moneyAmount}) => {

  return (
    <>
      <WrapperOneStat>
        <Title titleName="Money" />
        <Number>{moneyAmount.amountMoney}</Number>
      </WrapperOneStat>
    </>
  )
}

const mapStateToProps = state => ({
  moneyAmount: state.moneyAmount
})

export default connect(mapStateToProps, {})(moneyShow)