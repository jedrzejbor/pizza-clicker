import React from "react";
import styled from "styled-components";

const TitleName = styled.h2`
  font-size: 2rem;
`;

const Title = ({ titleName }) => {
  return <TitleName>{titleName}</TitleName>;
};

export default Title;
