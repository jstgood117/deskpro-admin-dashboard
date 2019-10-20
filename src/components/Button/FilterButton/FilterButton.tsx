import React, { ReactNode, SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../../Theme';
import Icon from '../../Icon';
import { action } from '@storybook/addon-actions';
import { dpstyle } from '../../Styled';

const ButtonStyled = styled.button`
  border-radius: 3px;
  padding: 4px 10px;
  border: 0.8px solid #a9b0b0 !important;
  outline: none;
  box-sizing: border-box;
  background: #ffffff;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  color: #a9b0b0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const StyledIcon = styled(dpstyle.div)`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export interface IProps {
  children?: ReactNode;
  onClick?: (e: any) => void;
}

const FilterButton: SFC<IProps> = props => (
  <ThemeProvider theme={DeskproAdminTheme}>
    <ButtonStyled onClick={action('clicked Filter Button')}>
      <StyledIcon>
        <Icon name="filter" />
      </StyledIcon>
      {props.children}
    </ButtonStyled>
  </ThemeProvider>
);

export default FilterButton;
