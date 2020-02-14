import React from 'react';
import { SettingInfo } from './Helpers';
import { StyledText, ArrowRightIcon } from './styles';
import Code from '../Code';
import { Row, Column } from '../Styled';
import Icon from '../Icon';

export const ReferencePanel = () => {
  return (
    <SettingInfo>
      <Row>
        <StyledText isTitle={false} style={{ opacity: 0.9 }}>
          A reference code format is composed of tokens surrounded by &nbsp;
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
  );
};
