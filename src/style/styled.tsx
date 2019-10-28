import React from 'react';
import styled from 'styled-components';
import { Flex as BaseFlex, Box as BaseBox } from 'reflexbox/styled-components';
import invariant from 'invariant';
import { FormattedMessage } from 'react-intl';

export const Flex = styled(BaseFlex)`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 16px;
  line-height: 1;
  color: ${props => props.theme.staticColor};
  font: ${props => props.theme.mainFont};
  box-sizing: content-box;
`;

export const FlowLayout = styled(Flex)`
  flex-wrap: wrap;
  align-items: center;
`;

/**
 * Box layout -- arranges boxes on a single row
 * and fills the container width.
 *
 * Example: A header area with controls to the right:
 *
 * ```
 * <BoxLayout>
 *   <BoxFill>Foo bar baz</BoxFill>
 *   <Box><CloseIcon /></Box>
 * </BoxLayout>
 * ```
 */
export const BoxLayout = styled(Flex).attrs(_props => ({
  flexWrap: 'nowrap',
  alignItems: 'stretch'
}))`
  width: 100%;
`;

/**
 * An element of a layout that wraps one or more components.
 */
export const Box = styled(BaseBox)`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  line-height: 1;
  color: ${props => props.theme.staticColor};
  font: ${props => props.theme.mainFont};
  box-sizing: content-box;
  img,
  svg {
    vertical-align: middle;
  }
`;

export interface IControlBoxProps {
  margin?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

export const ControlBox = styled(Box)<IControlBoxProps>`
  margin: ${props => props.margin || 5}px;
  margin-top: ${props => props.marginTop || 5}px;
  margin-right: ${props => props.marginRight || 5}px;
  margin-bottom: ${props => props.marginBottom || 5}px;
  margin-left: ${props => props.marginLeft || 5}px;
`;

/**
 * An element of the layout that fills the space.
 */
export const BoxFill = styled(Box).attrs(_props => ({
  flexGrow: 1,
  width: [1]
}))``;

export const TextString = ({
  messageId,
  ...rest
}: any & { messageId?: string }) => {
  invariant(
    !(messageId && rest.children && rest.children.length),
    'Cannot specify both messageId and children -- one or the other only'
  );

  if (messageId) {
    return (
      <span>
        <FormattedMessage id={messageId} />
      </span>
    );
  } else {
    return <span {...rest} />;
  }
};

/**
 * Standard text
 */
export const TextLabel = styled(props => <TextString {...props} />)<{messageId?: string; bold?: boolean; small?: boolean; color?: string;}>`
  margin: 0;
  padding: 0;
  line-height: 150%;
  display: inline-block;
  color: ${props => (props.color ? props.color : 'inherit')};
  font-family: ${props => props.theme.mainFont};
  font-size: ${props => (props.small ? '12px' : '14px')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

export const MenuLabel = styled(props => <TextString {...props} />)<{messageId?: string;}>`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.mainFont};
  font-size: 15px;
  line-height: 150%;
`;

/**
 * Standard text with link styling
 */
export const TextLinkLabel = styled(props => <TextString {...props} />)<{messageId?: string; bold?: boolean; small?: boolean; color?: string; underline?: boolean;}>`
  margin: 0;
  padding: 0;
  line-height: 1;
  display: inline-block;
  color: ${props => (props.color ? props.color : props.theme.brandPrimary)};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  cursor: pointer;
  font-family: ${props => props.theme.mainFont};
  font-size: ${props => (props.small ? '12px' : '14px')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

/**
 * Standard base styles
 */
export const dpstyle = {
  div: styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    display: block;
    line-height: 1;
    color: ${props => props.theme.staticColor};
    font-family: ${props => props.theme.mainFont};
    box-sizing: content-box;
  `,

  nav: styled.nav`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    display: block;
    line-height: 1;
    color: ${props => props.theme.staticColor};
    font-family: ${props => props.theme.mainFont};
    box-sizing: content-box;
  `,

  article: styled.article`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    display: block;
    line-height: 1;
    color: ${props => props.theme.staticColor};
    font-family: ${props => props.theme.mainFont};
    box-sizing: content-box;
  `,

  input: styled.input`
    border-radius: 3px;
    padding: 4px 10px;
    font-size: 100%;
    line-height: 1;
    font-family: ${props => props.theme.mainFont};
    font-weight: nomral;
    box-sizing: content-box;
    cursor: pointer;
  `,

  p: styled.p`
    margin: 10px 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    display: block;
    line-height: 1;
    color: ${props => props.theme.staticColor};
    font-family: ${props => props.theme.mainFont};
    box-sizing: content-box;
  `,

  ul: styled.ul`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    display: block;
    line-height: 1;
    list-style: none;
  `,

  a: styled.a`
    color: ${props => props.theme.brandPrimary};
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.activeColour};
    }
  `,

  plaina: styled.a`
    color: ${props => props.theme.staticColour};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.staticColour};
    }
  `,

  h1: styled.h1`
    margin: 0;
    padding: 0;
    line-height: 1;
    display: block;
    color: ${props => props.theme.staticColour};
    font-family: ${props => props.theme.headerFont};
    font-size: 28pt;
    font-weight: bold;
  `,

  h2: styled.h2`
    margin: 0;
    padding: 0;
    line-height: 1;
    display: block;
    color: ${props => props.theme.staticColour};
    font-family: ${props => props.theme.headerFont};
    font-size: 18pt;
  `,

  h3: styled.h3`
    margin: 0;
    padding: 0;
    line-height: 1;
    display: block;
    color: ${props => props.theme.staticColour};
    font-family: ${props => props.theme.headerFont};
    font-size: 16pt;
    font-weight: bold;
  `,

  h4: styled.h4`
    margin: 0;
    padding: 0;
    line-height: 1;
    display: block;
    color: ${props => props.theme.staticColour};
    font-family: ${props => props.theme.headerFont};
    font-size: 16pt;
  `,

  h5: styled.h5`
    margin: 0;
    padding: 0;
    line-height: 1;
    display: block;
    color: ${props => props.theme.staticColour};
    font-family: ${props => props.theme.headerFont};
    font-size: 15pt;
    font-weight: bold;
  `,

  h6: styled.h6`
    margin: 0;
    padding: 0;
    line-height: 1;
    display: block;
    color: ${props => props.theme.staticColour};
    font-family: ${props => props.theme.headerFont};
    font-size: 15pt;
  `,

  button: styled.button`
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    padding: 0px 10px;
  `
};

const HeadingText1 = dpstyle.h1;
const HeadingText2 = dpstyle.h2;
const HeadingText3 = dpstyle.h3;
const HeadingText4 = dpstyle.h4;
const HeadingText5 = dpstyle.h5;
const HeadingText6 = dpstyle.h6;

export const HeadingText = ({
  size,
  messageId,
  ...rest
}: any & { messageId?: string; size: number | string }) => {
  const s = parseInt(size + '');
  invariant(s && s >= 1 && s <= 6, 'size must be a number between 1 and 6');

  invariant(
    !(messageId && rest.children && rest.children.length),
    'Cannot specify both messageId and children -- one or the other only'
  );

  if (messageId) {
    rest.children = (
      <span>
        <FormattedMessage id={messageId} />
      </span>
    );
  }

  switch (s) {
    case 1:
      return <HeadingText1 {...rest} />;
    case 2:
      return <HeadingText2 {...rest} />;
    case 3:
      return <HeadingText3 {...rest} />;
    case 4:
      return <HeadingText4 {...rest} />;
    case 5:
      return <HeadingText5 {...rest} />;
    case 6:
      return <HeadingText6 {...rest} />;
  }
};

export const JsonFormStyle = styled(dpstyle.div)`
  input[type='text'], input[type='number'] {
    border-radius: 4px;
    &:focus {
      background-color: ${props => props.theme.secondaryColour};
      box-shadow: 0px 0px 8px ${props => props.theme.hoverColour};
      border: 1px solid ${props => props.theme.lightBlue};
    }
    /* If has value */
    &[value]:not([value='']) {
      background-color: ${props => props.theme.secondaryColour};
      border: 1px solid ${props => props.theme.greyLight};
    }
    &:hover {
      background: ${props => props.theme.hoverColour};
      ::placeholder {
        color: ${props => props.theme.activeColour};
      }
    }
    background: ${props => props.theme.greyLightest};
    padding: 0 15px;
    box-sizing: border-box;
    height: 35px;
    font-family: ${props => props.theme.mainFont};
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    border: none;
    outline: none;
    color: ${props => props.theme.staticColour};
    width: 100%;
    ::placeholder {
      font-family: ${props => props.theme.mainFont};
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 150%;
      color: ${props => props.theme.greyDark};
    }
  }
`;
export const SearchWrapper = styled(dpstyle.div)`
  input {
    &:focus {
      box-shadow: 0px 0px 0px transparent;
      border: none;
    }
    /* If has value */
    &[value]:not([value='']) {
      background-color: transparent;
      border: none;
    }
    &:hover {
      background: ${props => props.theme.hoverColour};
      ::placeholder {
        color: ${props => props.theme.activeColour};
      }
    }
    padding: 0;
  }
`;
