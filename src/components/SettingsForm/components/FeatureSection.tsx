import * as React from 'react';
import styled from 'styled-components';
import { StdElementRow } from './StdElementRow';

const FeatureSectionStyled = styled.div`
  width: 974px;

  & > h1 {
    font-family: Rubik;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #4c4f50;
    border-bottom: 1px solid #eff0f0;
    padding-bottom: 15px;
  }

  & > .form-row {
    border-bottom: 1px solid #eff0f0;
    padding: 30px 0;
    padding-left: 285px;
    /* margin-top: 16px; */
  }

  & > .form-row > label {
    position: absolute;
    font-family: Rubik;
    font-weight: 500;
    font-size: 15px;
    line-height: 150%;
    color: #4c4f50;
    left: 55px;
  }

  & > .form-row > .form-ctrl > label {
    position: absolute;
    left: 300px;
  }

  & .field-container {
    position: relative;
  }

  & .element-details {
    margin-top: 16px;
  }

  & .group-details > .title,
  & .element-details > .title {
    display: flex;
    align-items: center;
  }

  & .group-details > p,
  & .element-details > p {
    font-family: Rubik;
    font-size: 13px;
    line-height: 150%;
    /* Grey-dark */
    color: #8b9293;
    margin-top: 0;
    mix-blend-mode: normal;
    white-space: pre-wrap;
  }

  & div.group-articles {
    font-family: Rubik;
    min-width: 280px;
    font-size: 12px;
    margin-left: 30px;
    margin-bottom: 30px;
  }

  & div.group-articles > p {
    color: ${props => props.theme.staticColour};
    padding-bottom: 4px;
    font-size: 13px;
    font-weight: 500;
    border-bottom: ${props => `1px solid ${props.theme.greyLighter}`};
    margin-bottom: 6px;
  }
  & .group-articles > img {
    width: 300px;
    height: 140px;
  }

  & .group-details > div.group-articles ol {
    padding: 0;
    margin: 0;
  }

  & .group-details > div.group-articles li {
    list-style: none;
  }

  & .group-details > div.group-articles li a {
    text-decoration: none;
    color: ${props => props.theme.staticColour};
  }

  & .group-details > div.group-articles li::before {
    content: attr(data-index);
    border-radius: 100%;
    padding: 2px;
    margin: 8px 5px 0 0;
    color: ${props => props.theme.brandPrimary};
    background: ${props => `${props.theme.lightBlue}22`};
    display: inline-flex;
    height: 18px;
    width: 18px;
    align-items: center;
    justify-content: center;
  }

  & .element-info {
    position: absolute;
    top: 21px;
    left: 720px;
  }

  & .group-info {
    position: absolute;
    top: 0;
    left: 765px;
  }

  & .element-info a,
  & .group-info a {
    white-space: nowrap;
    margin-bottom: 16px;
    display: block;
  }

  & .element-info a > div,
  & .group-info a > div {
    height: 34px;
  }

  & .element-info a svg path,
  & .group-info a svg path {
    fill: ${props => props.theme.brandPrimary};
  }

  & .form-toggle {
    position: absolute;
    transform: translateY(2px);
    z-index: 1;
  }

  & label {
    font-family: Rubik;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #4c4f50;
  }
`;

interface Props {
  elements: any[];
  formikProps?: any;
  title: string;
}

const FeatureSection: React.FC<Props> = ({ elements, formikProps, title }) => (
  <FeatureSectionStyled>
    <h1>{title}</h1>
    {elements.map((element: any, i: number) => (
      <StdElementRow key={i} {...element} formikProps={formikProps} />
    ))}
  </FeatureSectionStyled>
);

export default FeatureSection;
