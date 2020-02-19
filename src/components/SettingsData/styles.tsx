import { dpstyle } from '../Styled';
import styled from 'styled-components';

export const StyledHeader = styled(dpstyle.div)`
  padding: 26px 24px 26px 24px;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100%;
`;

export const StyledText = styled(dpstyle.div1)<{ isTitle: boolean }>`
  font-weight: ${props => (props.isTitle ? 500 : 'normal')};
  display: block;
  font-size: 13px;
  color: #4c4f50;
`;

export const ArrowRightIcon = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 100%;
`;

export const StyledSettingInfo = styled(dpstyle.div)`
  width: 100%;
  height: 100%;
  border-left: 4px solid #9fccf3;
  background: rgba(225, 238, 251, 0.3);
  padding: 16px 49px 16px 16px;
  position: relative;
  box-sizing: border-box;
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  right: 18px;
  top: 18px;
  width: 10px;
  height: 10px;
  cursor: default;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${props => props.theme.staticColour};
    }
  }
  &:hover {
    svg {
      path {
        fill: ${props => props.theme.activeColour};
      }
    }
  }
`;

export const DollarIconWrapper = styled.div`
  border-radius: 4px;
  width: 24px;
  height: 24px;
  display: inline-flex;
  svg {
    margin: auto;
  }
  cursor: pointer;
  &:hover {
    background: rgba(248, 175, 60, 0.25);
  }
`;
