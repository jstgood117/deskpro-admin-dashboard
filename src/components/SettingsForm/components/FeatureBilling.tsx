import React, { FC } from 'react';
import styled from 'styled-components';

import Tooltip from '../../Tooltip';
import Toggle from '../../Toggle';
import Icon from '../../Icon';

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 17px 0px 16px 49px;
  border-left: 4px solid #F8AF3C;
  box-sizing: border-box;
  margin-bottom: 15px;
  margin-left: -53px;

  .element-details {
    margin-left: 18px;
  }

  .description {
    margin-bottom: 0px;
  }
`;

const DollarIconWrapper = styled.div`
  position: absolute;
  top: 14px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: rgba(255, 248, 225, 0.3);
  border-radius: 4px;
  cursor: pointer;

  & :hover {
    background: #FFF8E1;
  }
`;

const FeatureBilling: FC = (props: any) => {
  return (
    <div className='feature-billing form-item'>
      <Container>
        <Tooltip
          content='Pricing information'
          styleType='dark'
          placement='bottom'
          distance={0}
        >
          <DollarIconWrapper>
            <Icon name='ic-dollar-sign' />
          </DollarIconWrapper>
        </Tooltip>

        <Toggle
          className='form-toggle'
          id={props.showOn}
          size='medium'
          checked={props.formikProps.values[props.showOn]}
          onChange={props.formikProps.handleChange}
        />

        <div className='element-details'>
          <div className='element-details-label'>
            {props.title && <label htmlFor={props.showOn}>{props.title}</label>}
            {props.tooltip && (
              <Tooltip
                content={props.tooltip}
                styleType='light'
                placement='bottom-start'
                distance={0}
              >
                <span
                  style={{
                    paddingLeft: 4
                  }}
                >
                  <Icon name='info-question-text' />
                </span>
              </Tooltip>
            )}
          </div>
          {props.description && (
            <div className='description'>
              {props.description}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default FeatureBilling;
