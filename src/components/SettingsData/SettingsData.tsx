import React from 'react';
import {
  HeaderCard,
  HeaderMediumCard,
  SettingInfo,
  SettingInfoInUse,
  FeatureBilling,
  StyledText,
  ArrowRightIcon
} from './Helpers';
import Code from '../Code';
import { Row, Column } from '../Styled';
import Icon from '../Icon';

interface IProps {
  type: string;
  props?: any;
}
const SettingsData: React.FC<IProps> = ({ type, props }) => {
  const [closed, setClose] = React.useState(false);
  switch (type) {
    case 'header-card':
      return (
        <div style={{ height: 167, maxWidth: 974 }}>
          <HeaderCard />
        </div>
      );
    case 'header-medium-card':
      return (
        <div style={{ height: 167, maxWidth: 728 }}>
          <HeaderMediumCard />
        </div>
      );
    case 'setting-info':
      return (
        <div style={{ height: 134, maxWidth: 688 }}>
          <SettingInfo onClose={setClose} closed={closed}>
            <StyledText isTitle={false} style={{ opacity: 0.9 }}>
              Setting Info
            </StyledText>
          </SettingInfo>
        </div>
      );
    case 'setting-info-inUse':
      return (
        <div style={{ height: 152, maxWidth: 974 }}>
          <SettingInfoInUse />
        </div>
      );
    case 'feature-billing':
      return (
        <div style={{ height: 80, maxWidth: 722 }}>
          <FeatureBilling />
        </div>
      );
    case 'reference-code-panel':
      return (
        <div style={{ maxWidth: 699 }}>
          <SettingInfo onClose={setClose} closed={closed}>
            <Row>
              <StyledText isTitle={false} style={{ opacity: 0.9 }}>
                A reference code format is composed of tokens surrounded by
                &nbsp;
                <Code>angel brackets</Code>. Here are the available tokens:
                <br />
              </StyledText>
            </Row>
            <Row>
              <Column>
                <Row>
                  <Column className='is-4'>
                    <Row>
                      <Code>{'<A>'}</Code>
                    </Row>
                    <Row>
                      <Code>{'<?>'}</Code>
                    </Row>
                    <Row>
                      <Code>{'<MONTH>'}</Code>
                    </Row>
                    <Row>
                      <Code>{'<HOUR>'}</Code>
                    </Row>
                    <Row>
                      <Code>{'<SEC>'}</Code>
                    </Row>
                  </Column>
                  <Column>
                    <Row>
                      <StyledText isTitle={false}>A random letter</StyledText>
                    </Row>
                    <Row>
                      <StyledText isTitle={false}>
                        A random letter or number
                      </StyledText>
                    </Row>
                    <Row>
                      <StyledText isTitle={false}>
                        Month as a two-digit number(12)
                      </StyledText>
                    </Row>
                    <Row>
                      <StyledText isTitle={false}>
                        Hour in 24-hour time(24)
                      </StyledText>
                    </Row>
                    <Row>
                      <StyledText isTitle={false}>
                        Second as a two-digit number(59)
                      </StyledText>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Column>
                <Row>
                  <Column className='is-4'>
                    <Row style={{ paddingLeft: 25 }}>
                      <Code>{'<#>'}</Code>
                    </Row>
                    <Row style={{ paddingLeft: 25 }}>
                      <Code>{'<YEAR>'}</Code>
                    </Row>
                    <Row style={{ paddingLeft: 25 }}>
                      <Code>{'<DAY>'}</Code>
                    </Row>
                    <Row style={{ paddingLeft: 25 }}>
                      <Code>{'<MIN>'}</Code>
                    </Row>
                  </Column>
                  <Column>
                    <Row>
                      <StyledText isTitle={false}>A random number</StyledText>
                    </Row>
                    <Row>
                      <StyledText isTitle={false}>
                        Year as a four-digit number(2020)
                      </StyledText>
                    </Row>
                    <Row>
                      <StyledText isTitle={false}>
                        Day as a two-digit number(31)
                      </StyledText>
                    </Row>
                    <Row>
                      <StyledText isTitle={false}>
                        Minute as a two-digit number(59)
                      </StyledText>
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Row>
            <Row>
              <StyledText isTitle={false}>Here are some examples:</StyledText>
            </Row>
            <Row>
              <Column className='is-5'>
                <Row>
                  <Column className='is-11'>
                    <Code>{'<YEAR>-<MONTH>-(append 3 digits)'}</Code>
                  </Column>
                  <Column className='is-1'>
                    <ArrowRightIcon>
                      <Icon name='ic-arrow-right' />
                    </ArrowRightIcon>
                  </Column>
                </Row>
                <Row>
                  <Column className='is-11'>
                    <Code>{'<?><?><?><?><?><?>'}</Code>
                  </Column>
                  <Column className='is-1'>
                    <ArrowRightIcon>
                      <Icon name='ic-arrow-right' />
                    </ArrowRightIcon>
                  </Column>
                </Row>
                <Row>
                  <Column className='is-11'>
                    <Code>{'<YEAR>-<A><A><?><?><?>'}</Code>
                  </Column>
                  <Column className='is-1'>
                    <ArrowRightIcon>
                      <Icon name='ic-arrow-right' />
                    </ArrowRightIcon>
                  </Column>
                </Row>
                <Row>
                  <Column className='is-11'>
                    <Code>{'TICKET-<A><A><#><#><#><#>'}</Code>
                  </Column>
                  <Column className='is-1'>
                    <ArrowRightIcon>
                      <Icon name='ic-arrow-right' />
                    </ArrowRightIcon>
                  </Column>
                </Row>
              </Column>
              <Column style={{ paddingLeft: 18 }}>
                <Row>
                  <Code>2020-10-001</Code>,&nbsp;<Code>2020-10</Code>&nbsp;
                  <StyledText isTitle={false}>(Counting upwards)</StyledText>
                </Row>
                <Row>
                  <Code>10BQ8A</Code>,&nbsp;<Code>6SI73T</Code>
                </Row>
                <Row>
                  <Code>2013-AB34Q</Code>,&nbsp;<Code>2020-HX1R8</Code>
                </Row>
                <Row>
                  <Code>TICKET-AB2952</Code>,&nbsp;<Code>TICKET-FV4541</Code>
                </Row>
              </Column>
            </Row>
          </SettingInfo>
        </div>
      );
    default:
      return null;
  }
};

export default SettingsData;
