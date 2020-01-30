import * as React from 'react';
import styled from 'styled-components';
import { StdElementRow } from './StdElementRow';

const FeatureSectionStyled = styled.div`
  padding: 0px 0px 0px 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .element-details-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 5px;
  }

  label {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #4C4F50;
    text-align: left;
  }

  .description {
    color: #8B9293;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 150%;
    padding: 0;
    margin: 0 0 16px 0;
  }

  .feature-section-title {
    font-family: Rubik;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #4c4f50;
    border-bottom: 1px solid #eff0f0;
    padding: 39px 0 22px 0;
    margin: 0;
    max-width: 974px;
  }

  & > .form-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 34px 0 16px 0;
    position: relative;
    min-width: 1280px;
    &::after {
      position: absolute;
      background-color: #eff0f0;
      content: " ";
      display: inline-block;
      width: 974px;
      height: 1px;
      bottom: 0;
      left: 0;
    }
  }

  & > .form-row > label {
    min-width: 246px;
    text-align: left;
    font-weight: 500;
    font-size: 15px;
    line-height: 150%;
    color: #4c4f50;
  }

  & > .form-row > .form-ctrl {
    flex-grow: 1;
  }

  .element-info {
    display: flex;
    flex-direction: column;
    & > a {
      display: block;
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .group-elements {
    display: flex;
    flex-direction: column;
  }

  .column-groups {
    display: flex;
    flex-direction: column;
  }

  .vert-element-group {
    width: 100%;
  }

  .vert-element-field {
    margin-right: 20px;
  }

  .vert-elements {
    padding-left: 45px;
  }

  .vert-elements .form-item {
    margin-bottom: 16px;
  }

  .group-elements .vert-element-group .vert-element-group {
    max-width: 685px;
    .group-details {
      max-width: 100%;
    }
    > .form-item {
      margin-bottom: 0;
    }
  }

  .form-item {
    display: flex;
    flex-direction: row;
    /*margin-bottom: 15px;*/
    .group-details {
      width: 100%;
      max-width: 685px;
    }
    .element-info {
      margin-left: 12px;
      margin-top: -6px;
      .element-info-link {

      }
    }
  }

  & .field-container {
    .element-details {
      .element-details-label {
        margin-bottom: 4px;
      }
      label {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
      }
      .description {
        margin-bottom: 8px;
      }
    }
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
    max-width: 300px;
    max-height: 140px;
  }

  /*
  & .element-details {
    margin-top: 16px;
  }

  & .group-details > .title,
  & .element-details > .title {
    display: flex;
    align-items: center;
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

  & .element-info a svg path,
  & .group-info a svg path {
    fill: ${props => props.theme.brandPrimary};
  }
  */
`;

interface Props {
  elements: any[];
  formikProps?: any;
  title: string;
}

const FeatureSection: React.FC<Props> = ({ elements, formikProps, title }) => (
  <FeatureSectionStyled>
    <h1 className='feature-section-title'>{title}</h1>
    {elements.map((element: any, i: number) => (
      <StdElementRow key={i} {...element} formikProps={formikProps} />
    ))}
  </FeatureSectionStyled>
);

export default FeatureSection;
