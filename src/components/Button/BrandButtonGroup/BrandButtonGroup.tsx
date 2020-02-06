import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import Button from '../Button';
import brand1 from '../../../assets/brands/brand1.png';
import brand2 from '../../../assets/brands/brand2.png';
import brand3 from '../../../assets/brands/brand3.png';
import brand4 from '../../../assets/brands/brand4.png';
import brand5 from '../../../assets/brands/brand5.png';
import { SizeTypes } from '../../../types';

export interface IProps {
  children?: ReactNode;
  size: SizeTypes;
  selectBtn: (val: string) => void;
  selected: string;
}

const GroupStyled = styled.div`
  display: flex;
`;

const StyledButton = styled.div`
  padding-right: 24px;
  button {
    padding: 0 12px 0 11px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #4c4f50;
  }
`;

const BrandButtonGroup: FC<IProps> = ({ size, selected, selectBtn }) => {
  return (
    <GroupStyled>
      <StyledButton>
        <Button
          styleType='imageButton'
          onClick={() => {
            selectBtn('brand1');
          }}
          size={size}
          imageBtnSelected={selected === 'brand1'}
        >
          <img src={brand1} alt='brand1' />
          Brand 1
        </Button>
      </StyledButton>
      <StyledButton>
        <Button
          styleType='imageButton'
          onClick={() => {
            selectBtn('brand2');
          }}
          size={size}
          imageBtnSelected={selected === 'brand2'}
        >
          <img src={brand2} alt='brand2' />
          Brand 2
        </Button>
      </StyledButton>
      <StyledButton>
        <Button
          styleType='imageButton'
          onClick={() => {
            selectBtn('brand3');
          }}
          size={size}
          imageBtnSelected={selected === 'brand3'}
        >
          <img src={brand3} alt='brand3' />
          Brand 3
        </Button>
      </StyledButton>
      <StyledButton>
        <Button
          styleType='imageButton'
          onClick={() => {
            selectBtn('brand4');
          }}
          size={size}
          imageBtnSelected={selected === 'brand4'}
        >
          <img src={brand4} alt='brand4' />
          Brand 4
        </Button>
      </StyledButton>
      <StyledButton>
        <Button
          styleType='imageButton'
          onClick={() => {
            selectBtn('brand5');
          }}
          size={size}
          imageBtnSelected={selected === 'brand5'}
        >
          <img src={brand5} alt='brand5' />
          Brand 5
        </Button>
      </StyledButton>
    </GroupStyled>
  );
};

export default BrandButtonGroup;
