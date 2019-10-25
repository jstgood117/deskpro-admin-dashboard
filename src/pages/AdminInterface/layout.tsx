import styled from 'styled-components';
import { dpstyle } from '../../style/styled';

export const PageContainer = styled(dpstyle.div)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
`;

export const SidebarContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 215px;
    box-sizing: border-box;
`;

export const BodyContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 215px;
    overflow: auto;
    box-sizing: border-box;
`;
