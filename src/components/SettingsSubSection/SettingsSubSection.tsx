import React, { SFC, ReactNode } from 'react';
import styled from 'styled-components';

type SettingsSubSectionProps = {
  label?: string;
  children: ReactNode;
};

const Row = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  margin-bottom: 15px;
`;

const SettingsSubSection: SFC<SettingsSubSectionProps> = ({
  label,
  children
}) => {
  return (
    <Row>
      {label && <Label>{label}</Label>}
      {children}
    </Row>
  );
};

export default SettingsSubSection;