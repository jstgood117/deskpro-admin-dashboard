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
interface IProps {
  path: string;
}

const ImporterPage: FC<IProps> = () => {
  const submit = () => {};
  const [option, setOption] = React.useState('');

  return (
    <Container>
      <FeatureSectionStyled>
        <h1>Importer</h1>
        <div className='form-row'>
          <label>Data Importer</label>
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
                <HelpDesk title='Kayako' className='helpdesk' logo={Kayako} />
              </div>
              <div className='form-row'>
                {generateTitleAndDescription('field-container', {
                  description: 'Import from your on-premise Kayako helpdesk.'
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
                initialValues={{
                  email: 'a',
                  password: 'b'
                }}
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
                initialValues={{
                  email: 'a',
                  password: 'b'
                }}
              >
                {ZendeskForm}
              </Formik>
            )}
          </div>
        </div>
      </FeatureSectionStyled>
      {option && (
        <div className='footer'>
          <Button styleType='primary' size='medium' className='import-btn'>
            Import Helpdesk
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ImporterPage;
