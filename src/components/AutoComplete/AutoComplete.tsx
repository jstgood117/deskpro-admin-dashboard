import React, { SFC, useState } from 'react';
import Autocomplete from 'react-autocomplete';
import styled, { ThemeProvider } from 'styled-components';
import { uniqueId } from 'lodash';
import { BoxSizingProperty, FontWeightProperty } from 'csstype';
import { DeskproAdminThemeType } from '../../style/DeskproAdminTheme';
import { DeskproAdminTheme } from '../Theme';
import Icon from '../Icon';

export interface IProps {
  menuItems: IItemType[];
  placeholder?: string;
}

export interface IItemType {
  label: string;
}

const StyledAutoComplete = styled.div`
  font-family: ${props => props.theme.mainFont};
  position: relative;
  display: inline-flex;
  width: 100%;
  div {
    width: 100%;
  }
  input {
    width: 100%;
    height: 34px;
    padding: 1px 30px 1px 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: ${props => props.theme.staticColour};
    box-sizing: border-box;
    &:focus {
      height: 34px;
      border: 1px solid #9fccf3;
      box-sizing: border-box;
      outline: none;
      box-shadow: 0px 0px 8px #d2d8dd;
    }
  }
  span {
    position: absolute;
    right: 15px;
    display: flex;
    align-items: center;
    height: 34px;
  }
`;

export const AutoCompleteItemStyle = (
  isHighlighted: boolean,
  theme: DeskproAdminThemeType,
  selected: boolean
) => {
  return {
    background: isHighlighted ? theme.textHover : theme.white,
    padding: '0px 39px 0px 15px',
    color: selected ? theme.activeColour : theme.staticColour,
    fontSize: 14,
    fontWeight: selected ? 'bold' : ('normal' as FontWeightProperty),
    lineHeight: '150%',
    height: 31,
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box' as BoxSizingProperty
  };
};

export const MenuStyle = () => {
  return {
    position: 'absolute',
    left: 0,
    top: 34,
    zIndex: 1,
    borderRadius: '4px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '5px 0',
    width: 'max-content'
  };
};

const AutoComplete: SFC<IProps> = ({ menuItems, ...props }) => {
  const [value, setValue] = useState();
  const [containItems, setItems] = useState(menuItems);
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <StyledAutoComplete>
        <Autocomplete
          getItemValue={(item: IItemType) => item.label}
          items={containItems}
          inputProps={{ placeholder: props.placeholder }}
          renderItem={(item: IItemType, isHighlighted: boolean) => {
            const selected = item.label === value;
            return (
              <div
                style={AutoCompleteItemStyle(
                  isHighlighted,
                  DeskproAdminTheme,
                  selected
                )}
                key={uniqueId()}
              >
                {item.label}
                {selected && (
                  <span>
                    <Icon name='check-2' />
                  </span>
                )}
              </div>
            );
          }}
          value={value}
          onChange={(e: any) => {
            setValue(e.target.value);
            const newItems = menuItems.filter(menuItem => {
              return menuItem.label.includes(e.target.value);
            });
            setItems(newItems);
          }}
          onSelect={(val: IItemType) => {
            setValue(val);
          }}
          menuStyle={{
            position: 'absolute',
            left: 0,
            top: 34,
            zIndex: 1,
            borderRadius: '4px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '5px 0',
            width: 'max-content'
          }}
        />
        <span>
          <Icon name='downVector' />
        </span>
      </StyledAutoComplete>
    </ThemeProvider>
  );
};

export default AutoComplete;
