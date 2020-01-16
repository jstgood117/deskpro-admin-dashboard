import * as React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Icon from '../Icon';
import { StringRow } from './components/StringRow';
import { FieldArray } from 'formik';
// import Tooltip from '../Tooltip';

const StringListContainer = styled.div`
  position: relative;
  width: 240px;
  & > div.title-container {
    font-family: Rubik;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #4c4f50;
    border-bottom: 1px solid #eff0f0;
    padding-bottom: 8px;
    margin-bottom: 8px;
  }
  & > div.title-container span.string-list-count {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    display: flex;
    justify-content: flex-end;
    color: #a9b0b0;
  }
  & .string-row {
    position: relative;
    border-radius: 6px;
    height: 32px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #4c4f50;
    padding: 0 8px;
  }
  & .string-row:hover {
    background: #e8ebee99;
  }

  & .string-row.capped:hover {
    background: ${props => props.theme.white};
    border: 1px solid #e1eefb;
    box-sizing: border-box;
    box-shadow: 0px 3px 8px ${props => props.theme.brandPrimary + '66'};
    border-radius: 6px;
    font-weight: 500;
    color: ${props => props.theme.brandPrimary};
  }

  & .string-row svg {
    display: none;
  }
  & .string-row:hover svg {
    display: block;
    cursor: pointer;
    position: absolute;
    padding: 4px;
    background: ${props => props.theme.white};
    border: 1px solid #d3d6d7;
    border-radius: 3px;
    right: 8px;
    top: 4px;
  }
  & .add-button {
    margin-top: 8px;
  }
  & .add-button > button[disabled] {
    opacity: 0.5;
  }
`;

interface IProps {
  addTitle: string;
  id?: string;
  name?: string;
  max?: number;
  showTitle?: boolean;
  title?: string;
  values: string[];
}

const StringListBuilder: React.FC<IProps> = ({
  addTitle,
  id,
  max,
  name,
  showTitle,
  title,
  values
}) => {
  return (
    <StringListContainer>
      <div className='title-container'>
        {title}
        <span className={'string-list-count' + (showTitle ? '' : ' untitled')}>
          {values.length}
          {!!values.length && !!max && ` of ${max}`}
        </span>
      </div>
      <FieldArray
        name={name || id || ''}
        render={arrayHelpers => (
          <div>
            {values.map((value, index) => (
              <StringRow
                className={max ? 'capped' : ''}
                index={index}
                key={index}
                onRemove={() => arrayHelpers.remove(index)}
                value={value}
              />
            ))}
            <Button
              disabled={!!max && max === values.length}
              className='add-button'
              onClick={() => {
                // Temporary solution. Keep plain string
                const value = prompt('Enter new value');
                if (value) {
                  arrayHelpers.push(value);
                }
              }}
              styleType='secondary'
            >
              <Icon name='plus' />
              {addTitle}
            </Button>
          </div>
        )}
      />
    </StringListContainer>
  );
};

export default StringListBuilder;
