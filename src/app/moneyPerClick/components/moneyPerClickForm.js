import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import actionsMoney from '../../moneyGlobal/duck/actions';
import Button from "../../../components/atoms/button/Button";

const moneyPerClickForm = ({moneyPerClick, more, add, moneyAmount, subtractionMoney}) => {
  const moreMoneyClick = (e) => {
    e.preventDefault();
    const moreNumber = e.target.id;
    if (moneyAmount.amountMoney >= moneyPerClick.buttons[moreNumber].money) {
      more(parseInt(moreNumber),50);
      subtractionMoney(parseInt(moneyPerClick.buttons[moreNumber].money))
    }
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
  moneyPerClick: state.moneyPerClick,
  moneyAmount: state.moneyAmount
})

const mapDispatchToProps = dispatch => ({
  more: (number, moneyMore) => dispatch(actions.more(number, moneyMore)),
  add: item => dispatch(actions.add(item)),
  subtractionMoney: value => dispatch(actionsMoney.subtractionMoney(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(moneyPerClickForm)