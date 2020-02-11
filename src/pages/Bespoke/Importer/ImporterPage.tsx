import React, { FC } from 'react';
import { Formik } from 'formik';
import KayakoForm from './KayakoForm';
import ZendeskForm from './ZendeskForm';

import { ValidationSchema } from './validation';
import HelpDesk from '../../../components/HelpDesk';
import Kayako from '../../../assets/svg/helpdesk/kayako.svg';
import Zenddesk from '../../../assets/svg/helpdesk/zendesk.svg';
import Radio from '../../../components/Radio';
import { FeatureSectionStyled } from '../../../components/SettingsForm/components/FeatureSection';
import { generateTitleAndDescription } from '../../../components/SettingsForm/components/helpers/generateTitleAndDescription';
import Link from '../../../components/Link/Link';
import { Container, Group } from './styles';
import Button from '../../../components/Button';
import { initialKayakoValues, initialZendeskValues } from './testData';
import styled from 'styled-components';
interface IProps {
  path: string;
}

const ButtonToolbar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 70px;
  padding-left: 346px;
  border-top: 1px solid #d2d8dd;
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 112px;
    height: 34px;
    border-radius: 4px;
    border-width: 0;
    font-family: Rubik;
    font-size: 13px;
    line-height: 150%;
  }

  .btn-secondary button {
    margin-left: 329px;
    background-color: #f7f7f7;
    color: #a9b0b0;
    border: 1px solid #d3d6d7;
  }
`;

const ImporterPage: FC<IProps> = () => {
  const submit = () => {};
  const [option, setOption] = React.useState('');

  return (
    <>
      <Container>
        <FeatureSectionStyled>
          <h1 className='feature-section-title'>Importer</h1>
          <div className='form-row' style={{ justifyContent: 'flex-start' }}>
            <label>Data Importer</label>
            <div className='sub-container'>
              {generateTitleAndDescription('field-container', {
                description:
                  'The importer allows you to import data from other sources into Deskpro. To begin select a data source.'
              })}
              <div className='form-ctrl'>
                <Group>
                  <div style={{ display: 'flex' }}>
                    <Radio
                      setOption={(val: any) => {
                        setOption(val);
                      }}
                      option={option}
                      value='kayako'
                      id='kayako'
                    />
                    <HelpDesk
                      title='Kayako'
                      className='helpdesk'
                      logo={Kayako}
                    />
                  </div>
                  <div className='form-row'>
                    {generateTitleAndDescription('field-container', {
                      description:
                        'Import from your on-premise Kayako helpdesk.'
                    })}
                  </div>
                  <div className='info-link'>
                    <Link href='http://www.test.com' icon='ic-save'>
                      Kayako Importer
                    </Link>
                  </div>
                </Group>
                {option === 'kayako' && (
                  <Formik
                    onSubmit={submit}
                    validationSchema={ValidationSchema()}
                    initialValues={initialKayakoValues}
                  >
                    {KayakoForm}
                  </Formik>
                )}
              </div>
              <div className='form-ctrl'>
                <Group>
                  <div style={{ display: 'flex' }}>
                    <Radio
                      setOption={(val: any) => {
                        setOption(val);
                      }}
                      option={option}
                      value='zendesk'
                      id='zendesk'
                    />

                    <HelpDesk
                      title='Zendesk'
                      logo={Zenddesk}
                      className='helpdesk'
                    />
                  </div>
                  <div className='form-row'>
                    {generateTitleAndDescription('field-container', {
                      description: 'Import from a Zendesk helpdesk.'
                    })}
                  </div>
                  <div className='info-link'>
                    <Link href='http://www.test.com' icon='ic-save'>
                      Zendesk Importer
                    </Link>
                  </div>
                </Group>
                {option === 'zendesk' && (
                  <Formik
                    onSubmit={submit}
                    validationSchema={ValidationSchema()}
                    initialValues={initialZendeskValues}
                  >
                    {ZendeskForm}
                  </Formik>
                )}
              </div>
            </div>
          </div>
        </FeatureSectionStyled>
      </Container>
      {option && (
        <ButtonToolbar>
          <Button size='medium' styleType='primary'>
            Import Helpdesk
          </Button>
        </ButtonToolbar>
      )}
    </>
  );
};

export default ImporterPage;
