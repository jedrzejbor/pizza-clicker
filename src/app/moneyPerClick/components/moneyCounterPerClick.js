import React from 'react';
import { connect } from 'react-redux';
import Title from "../../../components/atoms/title/Title";


const moneyCounterPerClick = ({moneyPerClick}) => {

  return (
    <>
      <Title titleName={`${moneyPerClick.counter_data.toFixed(2)}$ per click`}/>
    </>
  )
}

const mapStateToProps = state => ({
  moneyPerClick: state.moneyPerClick
})

export default connect(mapStateToProps, {})(moneyCounterPerClick)