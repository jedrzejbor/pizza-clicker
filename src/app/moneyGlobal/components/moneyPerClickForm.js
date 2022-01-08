import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import Button from "../../../components/atoms/button/Button";
import styled from "styled-components";
import moneyPerClickReducer from '../duck';

const moneyPerClickForm = ({moneyPerClick, more, add}) => {
  const moreMoneyClick = (e) => {
    e.preventDefault();
    console.log(e);
    const moreNumber = e.target.id;
    more(parseInt(moreNumber),50);
  }

  return (
    <>
      {moneyPerClick.buttons.map((element) => {
      return (<Button
              nameId={element.title}
              key={element.id}
              id={element.id}
              name={element.number + " " + element.title + " " + element.money}
              getMoreMoney={moreMoneyClick}
            />)})}
    </>
  )
}

const mapStateToProps = state => ({
  moneyPerClick: state.moneyPerClick
})

const mapDispatchToProps = dispatch => ({
  more: (number, moneyMore) => dispatch(actions.more(number, moneyMore)),
  add: item => dispatch(actions.add(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(moneyPerClickForm)