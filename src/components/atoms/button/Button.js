import React from "react";
import styled from "styled-components";

const ButtonAll = styled.button`
  background-color: #fff;
  border: 1px solid black;
  height: 10%;
  width: 90%;
`;

const Button = ({ getMoreMoney, name, id }) => {
  return (
    <ButtonAll id={id} onClick={getMoreMoney}>
      {name}
    </ButtonAll>
  );
};

export default Button;
