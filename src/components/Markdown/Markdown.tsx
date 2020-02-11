import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { dpstyle } from '../Styled';
import SingleSelect from '../SelectComponents/SingleSelect';
import { IOptions } from '../../types';

export interface IProps {
  children?: ReactNode;
}
const MarkdownWrapper = styled(dpstyle.div)`
  input {
    background: #ffffff;
    border: 1px solid #d3d6d7;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
    height: 34px;
    min-width: 442px;
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 150%;
    color: #4c4f50;
    &::placeholder {
      font-weight: normal;
      color: #8b9293;
    }
  }
  color: #4c4f50;
  font-weight: normal;
  font-style: normal;
  font-size: 15px;
  line-height: 150%;
`;

const OptionWrapper = styled(dpstyle.div)`
  .select__control {
    min-width: 92px;
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 150%;
    color: #4c4f50;
    .select__indicators {
      padding-left: 0px;
    }
    .select__single-value {
      margin-right: 0px;
    }
  }
`;
// const Description = styled(dpstyle.div1)`
//   font-size: 13px;
//   color: #8b9293;
//   max-width: 423px;
//   padding: 16px 11px;
// `;
const options: IOptions[] = [
  { value: '1', label: '1 digits' },
  { value: '2', label: '2 digits' },
  { value: '3', label: '3 digits' },
  { value: '4', label: '4 digits' }
];

const Markdown: FC<IProps> = () => {
  const [selectedOption, selectOptions] = React.useState();
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <MarkdownWrapper>
          <dpstyle.input placeholder='Reference Code' />
          {' and append '}
        </MarkdownWrapper>
        &nbsp;
        <OptionWrapper>
          <SingleSelect
            options={options}
            type='primary'
            selectOption={selectOptions}
            selectedOption={selectedOption}
            placeholder='0 digits'
            visibleIcon={false}
          />
        </OptionWrapper>
      </div>
      {/* <Description>Examples: TKT-2020-AP0123</Description> */}
    </div>
  );
};

export default Markdown;
