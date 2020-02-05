import React, { FC } from 'react';
import styled from 'styled-components';

import Radio from './Radio';

type Option = {
  label: string;
  value: string;
  description?: string;
};

export interface IProps {
  className?: string;
  options: Option[];
  onChange?: (val: string | number) => void;
  value?: string | number;
  id?: string;
  title?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & label.radio-label {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #4c4f50;
  }
`;

const Title = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #4c4f50;
  margin-bottom: 10px;
`;

const Description = styled.div`
  padding-left: 25px;
  margin-top: 8px;
  margin-bottom: 16px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 150%;
  color: #8b9293;
`;

const RadioGroup: FC<IProps> = ({
  className,
  id,
  title,
  options,
  value,
  onChange
}) => (
  <Container className={className}>
    {title && <Title>{title}</Title>}
    {console.log(value)}
    {Array.from(options || []).map(
      ({ label, value: optionValue, description }, index) => (
        <div key={index} style={{ marginBottom: 8 }}>
          <Radio
            className='radio-option'
            setOption={(val: any) => {
              onChange(val);
            }}
            option={value}
            value={optionValue}
            id={`${id}_${index}`}
            label={label}
          />
          {description && <Description>{description}</Description>}
        </div>
      )
    )}
  </Container>
);

export default RadioGroup;
