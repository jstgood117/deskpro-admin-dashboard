import * as React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Icon from '../Icon';
import { StringRow } from './components/StringRow';
import { FieldArray, ArrayHelpers } from 'formik';
import Input from '../Input';
import Tooltip from '../Tooltip';

const StringListContainer = styled.div`
  position: relative;
  width: 300px;
  & > div.title-container {
    font-family: Rubik;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    min-height: 21px;
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
  & .string-list-rows {
    margin-bottom: 16px;
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
    padding: 0;
  }
  & .string-row:hover {
    background: ${props => `${props.theme.textHover}99`};
    padding: 0 8px;
  }

  & .string-row.capped:hover {
    background: ${props => props.theme.white};
    border: ${props => `1px solid ${props.theme.pageHeader}`};
    box-sizing: border-box;
    box-shadow: 0px 3px 8px ${props => props.theme.brandPrimary + '66'};
    border-radius: 6px;
    font-weight: 500;
    margin-left: -8px;
    cursor: pointer;
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
    justify-content: center;
    .text {
      margin-left: 8px;
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 150%;
      color: #1c3e55;
    }
    svg {
      padding-right: 0;
      width: 12px;
      height: 12px;
    }
  }
  & .add-button > button[disabled] {
    /*opacity: 0.5;*/
    background: #f7f7f7;
    border: 1px solid #d3d6d7;
    box-sizing: border-box;
    border-radius: 4px;
    .text {
      color: #a9b0b0;
    }
    svg,
    path {
      fill: #a9b0b0;
    }
  }
`;

interface IProps {
  addTitle: string;
  id?: string;
  name?: string;
  max?: number;
  title?: string;
  values: string[];
}

const handleAddItem = (
  arrayHelpers: ArrayHelpers,
  newValue: string,
  setEditIndex: (index: number) => void,
  setValue: (value: string) => void,
  setInAdd: (value: boolean) => void,
  index?: number
) => {
  if (newValue) {
    if (index === undefined) {
      arrayHelpers.push(newValue);
    } else {
      arrayHelpers.replace(index, newValue);
    }
  }
  setEditIndex(-1);
  setValue('');
  setInAdd(false);
};

const StringListBuilder: React.FC<IProps> = ({
  addTitle,
  id,
  max,
  name,
  title,
  values
}) => {
  // Flag that mentioned that new item was added but not saved yet
  const [inAdd, setInAdd] = React.useState(false);
  const [editIndex, setEditIndex] = React.useState(-1);
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

  const addBtnDisable = !!inAdd || (!!max && max === values.length);

  return (
    <StringListContainer className='string-list-builder'>
      <div className='title-container'>
        {title || ' '}
        <span className='string-list-count'>
          {values.length}
          {!!values.length && !!max && ` of ${max}`}
        </span>
      </div>
      <FieldArray
        name={name || id || ''}
        render={arrayHelpers => (
          <div>
            <div className='string-list-rows'>
              {values.map((value, index) =>
                index === editIndex ? (
                  <Input
                    autoFocus={true}
                    value={newItemValue || value}
                    key={index}
                    onChange={onChangeNewItem}
                    onBlur={() =>
                      handleAddItem(
                        arrayHelpers,
                        newItemValue.trim(),
                        setEditIndex,
                        setNewItemValue,
                        setInAdd,
                        editIndex
                      )
                    }
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === 'Enter') {
                        handleAddItem(
                          arrayHelpers,
                          newItemValue.trim(),
                          setEditIndex,
                          setNewItemValue,
                          setInAdd,
                          editIndex
                        );
                      }
                    }}
                    inputType='secondary'
                  />
                ) : (
                  <StringRow
                    className={max ? 'capped' : ''}
                    index={index}
                    key={index}
                    onEdit={() => setEditIndex(index)}
                    onRemove={() => arrayHelpers.remove(index)}
                    value={value}
                  />
                )
              )}
              {inAdd && (
                <Input
                  autoFocus={true}
                  value={newItemValue}
                  onBlur={() => {
                    handleAddItem(
                      arrayHelpers,
                      newItemValue.trim(),
                      setEditIndex,
                      setNewItemValue,
                      setInAdd
                    );
                  }}
                  onChange={onChangeNewItem}
                  onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                      handleAddItem(
                        arrayHelpers,
                        newItemValue.trim(),
                        setEditIndex,
                        setNewItemValue,
                        setInAdd
                      );
                    }
                  }}
                  inputType='secondary'
                />
              )}
            </div>
            {addBtnDisable ? (
              <Tooltip
                content='All usergroups have been added.'
                styleType='dark'
                placement='bottom'
              >
                <span>
                  <Button
                    className='add-button'
                    onClick={onAddClick}
                    buttonType='button'
                    styleType='secondary'
                    disabled={true}
                  >
                    <Icon name='plus' />
                    {addTitle && <span className='text'>{addTitle}</span>}
                  </Button>
                </span>
              </Tooltip>
            ) : (
              <Button
                className='add-button'
                onClick={onAddClick}
                buttonType='button'
                styleType='secondary'
              >
                <Icon name='plus' />
                {addTitle && <span className='text'>{addTitle}</span>}
              </Button>
            )}
          </div>
        )}
      />
    </StringListContainer>
  );
};

export default StringListBuilder;
