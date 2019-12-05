import React, { SFC, ReactNode } from 'react';
import styled from 'styled-components';

import Toggle from '../Toggle';

type SettingsSectionProps = {
  label?: string;
  children?: ReactNode;
  actions?: ReactNode;
  showToggle?: boolean;
  isToggleActive?: boolean;
  onToggleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Row = styled.div`
  padding-left:55px;
  padding-right:55px;
  display:grid;
  grid-template-columns:300px 2fr 1fr;
`;

const Labels = styled.div`
  padding-top:20px;
  border-top:1px solid #E8EBEE;
`;
const Actions = styled.div`
  padding-left:10px;
  padding-top:10px;
  border-top:1px solid #E8EBEE;
`;
const Options = styled.div`
  padding-top:20px;
`;

const Label = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  display:flex;
  justify-content: space-between;
  align-items: center;
`;

export const SettingsSection:SFC<SettingsSectionProps> = ({
  label,
  children,
  actions,
  showToggle,
  isToggleActive,
  onToggleChange
}) => {
  return (
    <Row>
      <Labels>
        <Label>
          {label}
          {showToggle && onToggleChange && (
            <Toggle
              size='medium'
              checked={isToggleActive}
              onChange={onToggleChange}
            />
          )}
        </Label>
      </Labels>
      <Actions>
        {children}
      </Actions>
      <Options>
        {actions}
      </Options>
    </Row>
  );
};

export default SettingsSection;