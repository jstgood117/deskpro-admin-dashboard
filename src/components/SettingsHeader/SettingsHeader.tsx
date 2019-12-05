import React, { SFC, ReactNode } from 'react';
import styled from 'styled-components';

type SettingsHeaderProps = {
  children?: ReactNode;
};

const Row = styled.div`
  padding:39px 55px 22px 55px;
`;

const Col = styled.div``;

export const SettingsHeader:SFC<SettingsHeaderProps> = ({
  children
}) => {
  return (
    <Row>
      <Col>
        {children}
      </Col>
    </Row>
  );
};

export default SettingsHeader;