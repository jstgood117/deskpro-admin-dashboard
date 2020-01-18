import * as React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Icon from '../Icon';
import { StringRow } from './components/StringRow';
import { FieldArray } from 'formik';
import Input from '../Input';
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
    color: ${props => props.theme.staticColour};
    border-bottom: ${props => `1px solid ${props.theme.greyLighter}`};
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
    color: ${props => props.theme.static2Colour};
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
    color: ${props => props.theme.staticColour};
    padding: 0 8px;
  }
  & .string-row:hover {
    background: ${props => `${props.theme.textHover}99`};
  }

  & .string-row.capped:hover {
    background: ${props => props.theme.white};
    border: ${props => `1px solid ${props.theme.pageHeader}`};
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
    border: ${props => `1px solid ${props.theme.greyLight}`};
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
  // Flag that mentioned that new item was added but not saved yet
  const [inAdd, setInAdd] = React.useState(false);
  const [newItemValue, setNewItemValue] = React.useState('');

  const onAddClick = React.useCallback(() => {
    setInAdd(true);
    setNewItemValue('');
  }, []);
  const onChangeNewItem = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewItemValue(e.target.value);
    },
    []
  );

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
            {inAdd && (
              <Input
                autoFocus={true}
                value={newItemValue}
                onChange={onChangeNewItem}
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === 'Enter') {
                    arrayHelpers.push(newItemValue);
                    setInAdd(false);
                    setNewItemValue('');
                  }
                }}
                inputType='secondary'
              />
            )}
            <Button
              disabled={inAdd || (!!max && max === values.length)}
              className='add-button'
              onClick={onAddClick}
              buttonType='button'
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
