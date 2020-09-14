import React from "react";
import styled from "styled-components";

const TitleName = styled.h2``;

const Title = ({ titleName }) => {
  return <TitleName>{titleName}</TitleName>;
};

export default Title;
