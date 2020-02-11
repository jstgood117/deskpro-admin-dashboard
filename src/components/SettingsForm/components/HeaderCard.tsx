import React from 'react';
import styled from 'styled-components';
import { dpstyle } from '../../Styled';

import Toggle from '../../Toggle';
import Link from '../../Link';

const StyledCard = styled(dpstyle.div)`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 21px;
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100%;
  box-sizing: border-box;

  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  .title {
    display: flex;
    align-items: center;
    height: 23px;
    font-size: 18px;
    padding-left: 14px;
    font-size: 18px;
    color: ${props => props.theme.staticColour};
  }

  .description {
    padding: 9px 0px 0px 44px;
    font-size: 13px;
    font-weight: normal;
    color: ${props => props.theme.greyDark};
    mix-blend-mode: normal;
  }
`;

const HeaderCard = (props: any) => (
  <div className='header-card'>
    <StyledCard
      style={{ backgroundImage: `url(${require('../../../assets/svg/settings-header.svg')})` }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Toggle
          className='form-toggle'
          id={props.showOn}
          size='medium'
          checked={props.formikProps.values[props.showOn]}
          onChange={props.formikProps.handleChange}
        />
        <div className='title'>
          {props.title}
        </div>
      </div>
      <div className='description'>
        {props.description}
      </div>
      {props.info ? (
        <Link
          className='element-info-link'
          href={props.info.url}
          icon={props.info.icon}
        >
          {props.info.title}
        </Link>
      ) : null}
    </StyledCard>
  </div>
);

export default HeaderCard;
