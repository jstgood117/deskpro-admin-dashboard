import React, { SFC } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const InputStyled = styled.input`
  border-radius: 4px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  height: 16px;
  width: 100%;
  background: transparent;
  padding-left: 10px;
  color: #4C4F50;
  ::placeholder {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    color: #8b9293;
  }
`;
const SearchWrapper = styled.div`
  display: flex;
  background: #f7f7f7;
  max-width: 250px;
  padding: 9px 15px 9px 15px;
`;
export interface IProps {
  placeholder: string;
  handleSearch?: (e: any) => void;
}

const SearchBox: SFC<IProps> = props => {
  return (
    <SearchWrapper>
      <Icon name="search" />
      <InputStyled placeholder={props.placeholder} onChange={props.handleSearch}></InputStyled>
    </SearchWrapper>
  );
};

export default SearchBox;
