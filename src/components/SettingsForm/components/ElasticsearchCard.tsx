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
    line-height: 150%;
    padding: 19px 0px 0px 44px;
    font-size: 13px;
    font-weight: normal;
    color: ${props => props.theme.greyDark};
    mix-blend-mode: normal;
  }

  .link {
    height: 22px;
    padding: 8px 0px 0px 44px;
    display: flex;
    align-items: center;
    span {
      padding-left: 8px;
      font-size: 13px;
      font-weight: normal;
      color: ${props => props.theme.greyDark};
      mix-blend-mode: normal;
    }
  }
`;

const ElasticsearchCard = (props: any) => (
  <div className='elastic-card'>
    <StyledCard
      style={{
        backgroundImage: `url(${require('../../../assets/svg/elasticsearch.svg')})`
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Toggle
          className='form-toggle'
          id={props.showOn}
          size='medium'
          checked={props.formikProps.values[props.showOn]}
          onChange={props.formikProps.handleChange}
        />
        {props.title && (
          <label className='title' htmlFor={props.showOn}>
            {props.title}
          </label>
        )}
      </div>
      <div className='link'>
        <Link
          icon='external-link'
          href='https://deskpro.github.io/deskpro-admin-frontend/storybook/?path=/story/relationship--relationship'
          type='string'
        >
          Elasticsearch
        </Link>
        <span>is a specialized search server technology.</span>
      </div>
      <div className='description'>
        The benifits of using Elasticsearch:
        <br />
        &nbsp;&nbsp; - &nbsp;  More properties are searched including full ticket messages and notes.
        <br />
        &nbsp;&nbsp; - &nbsp;  You can search on pharses, such as "dog and cat".
        <br />
        &nbsp;&nbsp; - &nbsp;  Search results are returned much faster and results are more accurate.
        <br />
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

export default ElasticsearchCard;
