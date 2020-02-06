import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { isNil } from 'lodash';
import { Scrollbars } from 'react-custom-scrollbars';

import { DeskproAdminTheme } from '../Theme';
import Icon from '../Icon';

import {
  DropdownContent,
  ButtonStyled,
  DropdownContentLink,
  ClearButton,
  DropdownContentPanel,
  ButtonWrapper
} from './ButtonStyles';
import { IButtonProps } from './types';
import { getStyle } from './Helpers';

export interface IItemProps {
  label?: string | number;
  link: string;
}

const Button: FC<IButtonProps> = ({
  buttonType,
  disabled,
  styleType,
  size,
  showClearButton,
  renderItem,
  onClear,
  items,
  opened,
  onClick,
  onSelect,
  children,
  dropdownValue,
  iconOnly,
  className,
  imageBtnSelected,
  name
}) => {
  const styles = getStyle(styleType, size, DeskproAdminTheme, imageBtnSelected);
  const selected = !isNil(dropdownValue) && dropdownValue !== '';
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <ButtonWrapper
        hasClearButton={showClearButton && selected}
        className={`${className ? className : ''}`}
      >
        <ButtonStyled
          disabled={!!disabled}
          styles={styles}
          className={`${selected ? 'selected' : ''} ${
            imageBtnSelected ? 'selected-image-btn' : ''
          }`}
          onClick={onClick}
          hasClearButton={showClearButton && selected}
          iconOnly={iconOnly}
          type={buttonType || 'button'}
        >
          {children}
        </ButtonStyled>
        {items && items.length > 0 && opened && (
          <DropdownContent onClick={onClick} className='dropdownContent'>
            <Scrollbars
              style={{ height: 45 * items.length, zIndex: 1, maxHeight: 190 }}
              renderTrackVertical={({ style }) => (
                <div
                  style={{
                    background: '#ccc',
                    position: 'absolute',
                    width: 6,
                    right: 0,
                    bottom: 0,
                    top: 0,
                    borderRadius: 3
                  }}
                />
              )}
            >
              {items.map((item: IItemProps, index: number) => {
                return renderItem ? (
                  renderItem(item, index)
                ) : (
                  <DropdownContentLink
                    key={index}
                    onClick={() => onSelect && onSelect(item)}
                  >
                    <span
                      className={`${
                        name === 'sort' && dropdownValue.label === item.label
                          ? 'selected'
                          : ''
                      }`}
                    >
                      {item.label ? item.label : item.link}
                    </span>

                    {name === 'sort' && dropdownValue.label === item.label && (
                      <span className='sort-icon'>
                        <Icon name='ic-sort-down-active' />
                      </span>
                    )}
                    {name === 'sort-desc' &&
                      dropdownValue.label === item.label && (
                        <span className='sort-icon'>
                          <Icon name='ic-sort-up-active' />
                        </span>
                      )}
                  </DropdownContentLink>
                );
              })}
            </Scrollbars>

            <DropdownContentPanel />
          </DropdownContent>
        )}
        {items && items.length > 0 && showClearButton && selected && (
          <ClearButton
            className={`${selected ? 'selected' : 'unselected'}`}
            onClick={(event: { stopPropagation: () => void }) => {
              event.stopPropagation();
              if (onClear) {
                onClear();
              }
            }}
            hasClearButton={showClearButton && selected}
          >
            <Icon name='close' />
          </ClearButton>
        )}
      </ButtonWrapper>
    </ThemeProvider>
  );
};

export default Button;
