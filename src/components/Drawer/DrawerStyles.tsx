import styled from 'styled-components';
import { dpstyle } from '../Styled';

export const OverlayStyled = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background-color: ${props => props.theme.black};
  opacity: ${props => props.open ? .2 : 0};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  transition: opacity .3s ease-out, visibility .3s ease-out;
  will-change: opacity;
`;

export const DrawerStyled = styled.div<{ open: boolean }> `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 440px;
  background-color: ${props => props.theme.white};
  box-shadow: -5px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
  transition: .3s;
  transform: translateX(${props => props.open ? 0 : 440}px);
  will-change: transform;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const DrawerHeader = styled(dpstyle.div1)`
  display: flex;
  align-items: center;
  height: 83px;
  padding: 32px 32px 24px 32px;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid ${props => props.theme.greyLighter};
  box-sizing: border-box;
`;

export const StyledClose = styled.div`
  position: absolute;
  top: 33px;
  right: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  svg {
    width: 6.98px;
    height: 12px;
    color: ${props => props.theme.static2Colour};
  }
`;

export const DrawerBody = styled.div`
  display: flex;
  padding: 19px 32px;
`;

export const DrawerFooter = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 68px;
  padding: 16px 32px 18px 32px;
  border-top: 1px solid ${props => props.theme.greyLighter};
  box-sizing: border-box;
  button {
    width: 112px;
    margin-right: 16px;
    justify-content: center;
  }
`;
