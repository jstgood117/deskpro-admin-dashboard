import React, { useState } from 'react';
import styled from 'styled-components';
import { FieldArray } from 'formik';

import Button from '../Button';
import Icon from '../Icon';
import Tooltip from '../Tooltip';
import Drawer from '../Drawer';
import { StringRow } from './components/StringRow';

import Usergroups from './components/Usergroups';

const StringListContainer = styled.div`
  width: 240px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: ${props => props.theme.staticColour};

  & > div.title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: ${props => `1px solid ${props.theme.greyLighter}`};

    & > span.string-list-count {
      font-size: 13px;
      color: ${props => props.theme.static2Colour};
    }
  }

  & .string-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    padding: 0 8px;
    border-radius: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.theme.staticColour};
    box-sizing: border-box;

    svg {
      display: none;
    }

    :hover {
      background: ${props => `${props.theme.textHover}99`};

      svg {
        display: block;
        cursor: pointer;
        padding: 4px;
        border: ${props => `1px solid ${props.theme.greyLight}`};
        border-radius: 3px;
        background: ${props => props.theme.white};
      }
    }

    &.capped:hover {
      cursor: pointer;
      font-weight: 500;
      color: ${props => props.theme.brandPrimary};
      background: ${props => props.theme.white};
      border: ${props => `1px solid ${props.theme.pageHeader}`};
      border-radius: 6px;
      box-shadow: 0px 3px 8px rgba(159, 204, 243, 0.5);
    }
  }

  & .add-button {
    justify-content: center;
    margin-top: 8px;

    .text {
      font-family: Rubik;
      font-size: 13px;
      margin-left: 8px;
    }

    svg {
      width: 12px;
      height: 12px;
      padding-right: 0;
    }

    button[disabled] {
      color: ${props => props.theme.static2Colour};
      border: 1px solid ${props => props.theme.greyLight};
      background-color: ${props => props.theme.greyLightest};
      svg path {
        fill: ${props => props.theme.greyLight};
      }
    }
  }
`;

interface IProps {
  id: string;
  name?: string;
  title?: string;
  buttonTitle?: string;
  options: string[];
  selectedOptions?: string[];
  tooltip?: string;
  formikProps: any;
}

const StringListBuilder: React.FC<IProps> = ({
  id,
  name,
  title = '',
  buttonTitle,
  options,
  selectedOptions,
  tooltip = '',
  formikProps,
}) => {

  const [open, setOpen] = useState(false);

  const onAddClick = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  // if all usergroups have been added, make button disable.
  const enabled = !selectedOptions || options.length > selectedOptions.length;

  return (
    <StringListContainer>
      <div className='title-container'>
        {title}
        <span className='string-list-count'>
          {!selectedOptions || selectedOptions.length === 0
            ? '0'
            : `${selectedOptions.length} of ${options.length}`}
        </span>
      </div>
      <FieldArray
        name={name || id}
        render={arrayHelpers => (
          <div>
            <div style={{ marginBottom: 8 }}>
              {selectedOptions && selectedOptions.map((option, index) => (
                <StringRow
                  index={index}
                  key={index}
                  onRemove={() => arrayHelpers.remove(index)}
                  value={option}
                />
              )
              )}
            </div>
            <Tooltip
              content={tooltip}
              styleType='dark'
              placement='bottom'
              enabled={!enabled && !!tooltip}
            >
              <span>
                <Button
                  disabled={!enabled}
                  className='add-button'
                  onClick={onAddClick}
                  buttonType='button'
                  styleType='secondary'
                >
                  <Icon name='plus' />
                  {buttonTitle && <span className='text'>{buttonTitle}</span>}
                </Button>
              </span>
            </Tooltip>
          </div>
        )}
      />

      <Drawer open={open} onClose={closeDrawer}>
        <Usergroups
          id={id}
          open={open}
          title={title}
          options={options}
          selectedOptions={selectedOptions}
          onCancel={closeDrawer}
          formikProps={formikProps}
        />
      </Drawer>
    </StringListContainer>
  );
};

export default StringListBuilder;
