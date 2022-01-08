import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';
import actionsMoney from '../../moneyGlobal/duck/actions';
import Button from "../../../components/atoms/button/Button";

const moneyPerSecForm = ({moneyPerSec, more, add, moneyAmount, subtractionMoney}) => {
  const moreMoneySec = (e) => {
    e.preventDefault();
    const moreNumber = e.target.id;
    if (moneyAmount.amountMoney >= moneyPerSec.buttons[moreNumber].money) {
      more(parseInt(moreNumber),50);
      subtractionMoney(parseInt(moneyPerSec.buttons[moreNumber].money))
    }
  }

  return (
    <>
      {moneyPerSec.buttons.map((element) => {
      return (<Button
              nameId={element.title}
              key={element.id}
              id={element.id}
              name={element.number + " " + element.title + " " + element.money}
              getMoreMoney={moreMoneySec}
            />)})}
    </>
  )
}

const mapStateToProps = state => ({
  moneyPerSec: state.moneyPerSec,
  moneyAmount: state.moneyAmount
})

const mapDispatchToProps = dispatch => ({
  more: (number, moneyMore) => dispatch(actions.more(number, moneyMore)),
  add: item => dispatch(actions.add(item)),
  subtractionMoney: value => dispatch(actionsMoney.subtractionMoney(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(moneyPerSecForm)