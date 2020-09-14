import React from "react";
import styled from "styled-components";

const ButtonAll = styled.button`
  background-color: #fff;
  border: 1px solid black;
  height: 50px;
  width: 45%;
`;

const Button = ({ name }) => {
  return <ButtonAll>{name}</ButtonAll>;
};

export default Button;
