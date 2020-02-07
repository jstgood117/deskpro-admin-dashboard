import React, { FC } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Markdown from 'react-markdown';

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
  & * {
    margin: 0;
    padding: 0;
  }
  & > p {
    margin-bottom: 8px;
  }
  & a {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 150%;
    color: #3a8dde;
    background: url(/images/vector.png) no-repeat left;
    padding-left: 20px;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const RadioGroup: FC<IProps> = ({
  className,
  id,
  title,
  options,
  value,
  onChange
}) => (
  <Container className={classNames('radio-group', className)}>
    {title && <Title>{title}</Title>}
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
          {description && (
            <Description className='radio-description'>
              <Markdown>{description}</Markdown>
            </Description>
          )}
        </div>
      )
    )}
  </Container>
);

export default RadioGroup;
