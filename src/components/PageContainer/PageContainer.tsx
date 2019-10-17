import React, { SFC } from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  width: '100%';
  height: '100%';
`;

const PageContainer: SFC = props => {
  return <ContainerStyled>{props.children}</ContainerStyled>
};

export default PageContainer;
