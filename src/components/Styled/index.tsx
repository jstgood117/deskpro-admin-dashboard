import React from 'react';
import styled from 'styled-components';
import { Flex as BaseFlex, Box as BaseBox } from 'reflexbox/styled-components';

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

export const Container = styled(Flex)`
    flex-wrap: nowrap;
    align-items: stretch;
    width: 100%;
`;

export const Box = styled(BaseBox)`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    line-height: 1;
    color: ${props => props.theme.staticColor};
    font: ${props => props.theme.mainFont};
    box-sizing: content-box;
    img, svg {
        vertical-align: middle;
    }
`;

export const BoxFill = styled(Box)`
    flex-grow: 1;
    width: 100%;
`;

export const TextLabel = styled((props) => <span {...props} />)<{ bold?: boolean, small?: boolean, color?: string }>`
    margin: 0;
    padding: 0;
    line-height: 1;
    display: inline-block;
    color: ${props => props.color ? props.color : props.theme.staticColour};
    font-family: ${props => props.theme.mainFont};
    font-size: ${props => props.small ? '12px' : '14px'};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
`;

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
    `
};
