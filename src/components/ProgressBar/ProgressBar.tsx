import React from 'react';
import styled from 'styled-components';

import BgImg from '../../assets/background/progress-vector.png';
export interface IProps {
  percentage: number;
}
const OuterDiv = styled.div`
  background: #f7f7f7;
  border-radius: 20px;
  width: 100%;
  height: 16px;
  position: relative;
`;

const InnerDiv = styled.div<{ percentage: number }>`
  background: #9fccf3;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: ${props => (props.percentage === 100 ? 20 : 0)}px;
  border-bottom-right-radius: ${props => (props.percentage === 100 ? 20 : 0)}px;
  width: ${props => props.percentage}%;
  height: 16px;
  position: relative;
  background-image: url(${BgImg});
  transition: 0.25s;
`;

const percentageLimit = (min: number, value: number, max: number) => {
  return Math.min(Math.max(min, value), max);
};

const ProgressBar: React.FC<IProps> = props => (
  <OuterDiv>
    <InnerDiv percentage={percentageLimit(0, props.percentage, 100)} />
  </OuterDiv>
);

export default ProgressBar;
