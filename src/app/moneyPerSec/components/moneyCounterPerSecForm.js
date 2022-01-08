import React from 'react';
import { connect } from 'react-redux';
import Title from "../../../components/atoms/title/Title";


const moneyCounterPerSecForm = ({moneyPerSec}) => {

  return (
    <>
      <Title titleName={`${moneyPerSec.counter_data.toFixed(2)}$ per second`}/>
    </>
  )
}

const mapStateToProps = state => ({
  moneyPerSec: state.moneyPerSec
})

export default connect(mapStateToProps, {})(moneyCounterPerSecForm)