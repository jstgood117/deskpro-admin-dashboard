import React, { useState } from 'react';
import styled from 'styled-components';
import { StdElementRow } from './StdElementRow';
import BrandButtonGroup from '../../Button/BrandButtonGroup';
import Icon from '../../Icon';
import SingleSelect from '../../SelectComponents/SingleSelect';
import FeatureSectionContext from '../contexts/FeatureSectionContext';
import HeaderCard from './HeaderCard';

export const FeatureSectionStyled = styled.div`
  padding: 0px 0px 0px 55px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 974px;

  .header-card {
    height: 166px;
  }

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
    cursor: pointer;
  }

  .description {
    color: #8B9293;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 150%;
    width: 578px;
    margin: 0 0 16px 0;
    * {
      padding: 0;
      margin: 0;
    }
    a {
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 150%;
      color: #3A8DDE;
      background: url(/images/vector.png) no-repeat left;
      padding-left: 20px;
      margin-left: 8px;
      margin-right: 8px;
    }
  }

  & .alert-section {
    margin-left: 0px;
    margin-top: 16px;
    margin-bottom: 16px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    * {
      padding: 0;
      margin: 0;
    }
    code {
      background: #EBE4F2;
      border-radius: 4px;
      padding: 4px 10px;
      font-family: Source Code Pro;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 150%;
      color: #7A56DE;
    }
  }

  & .feature-section-title {
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

  & .feature-section-select {
    padding: 39px 0 22px 0;
    margin: 0;
    max-width: 974px;
    border-bottom: 1px solid #eff0f0;
    color: #4c4f50;
    .select__control {
      margin: 0;
      padding: 0;
      width: 290px;
      min-width: 290px;
      .select__single-value {
        margin-right: 0;
      }
      .select__indicators {
        transform: translateX(-15px);
      }
    }
  }

  .settings-data {
    margin-top: 30px;
    margin-left: -250px;
    margin-bottom: 24px;
  }

  & > .form-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 31px 0 16px 0;
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
    width: 206px;
    margin-right: 40px;
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

  .header-card .element-info-link {
    height: 34px;
    display: flex;
    align-items: center;
    padding-left: 44px;

    & > div {
      box-shadow: none;
      background: none;
      padding: 0px;
      box-sizing: border-box;
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
    width: 27px;
    margin-right: 18px;
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
    .group-details {
      width: 100%;
      max-width: 685px;
    }
    .element-info {
      margin-left: 12px;
      margin-top: -6px;
      margin-bottom: 0;
      .element-info-link {

      }
    }
  }

  .vert-element-group > .form-item > .element-info {
    margin-bottom: 24px;
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
    transform: translate(-20px,2px);
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

  .code-section {
    width: 578px;
    .description {
      margin-top: 8px;
    }
  }

  .horz-element-group {
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 24px;

    .element-info {
      margin-left: 121px;
      margin-top: -6px;
      margin-bottom: 24px;
    }
  }
`;

interface Props {
  elements: any[];
  formikProps?: any;
  title: string;
  brandButtonGroup?: boolean;
  field?: any;
  header?: any;
  icon?: string;
}

const FeatureSection: React.FC<Props> = ({
  elements,
  formikProps,
  title,
  field,
  icon,
  brandButtonGroup,
  header
}) => {
  const [selected, selectBtn] = useState(brandButtonGroup ? 'brand1' : '');
  const enabled =
    !header || !header.showOn || formikProps.values[header.showOn] === true;

  return (
    <FeatureSectionStyled className='feature-section'>
      {title ? (
        <h1 className='feature-section-title'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row'
            }}
          >
            <span style={{ marginRight: 20 }}>{title}</span>
            {icon && <Icon name={icon} />}
          </div>
          {header ? (
            <HeaderCard {...header} formikProps={formikProps} />
          ) : null}
          {brandButtonGroup && (
            <div style={{ margin: '8px 0 8px 0' }}>
              <BrandButtonGroup
                size='medium'
                selectBtn={(val: string) => {
                  selectBtn(val);
                }}
                selected={selected}
              />
            </div>
          )}
        </h1>
      ) : (
          <div className='feature-section-select'>
            {field && (
              <SingleSelect
                options={field.options}
                type={field.selectType}
                selectedOption={field.options[0]}
                selectOption={() => null}
              />
            )}
            {brandButtonGroup && (
              <div style={{ margin: '8px 0 8px 0' }}>
                <BrandButtonGroup
                  size='medium'
                  selectBtn={(val: string) => {
                    selectBtn(val);
                  }}
                  selected={selected}
                />
              </div>
            )}
          </div>
        )}

      <FeatureSectionContext.Provider value={{ prefixName: selected }}>
        {enabled &&
          elements.map((element: any, i: number) => (
            <StdElementRow key={i} {...element} formikProps={formikProps} />
          ))}
      </FeatureSectionContext.Provider>
    </FeatureSectionStyled>
  );
};

export default FeatureSection;
