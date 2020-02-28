import styled from 'styled-components';
import Checkbox from '../../Checkbox';

export const StyledCheckbox = styled(Checkbox)`
  &.form-checkbox {
    position: absolute;
    transform: translateY(9px);
    z-index: 1;
  }
`;
export const ErrorMessage = styled.div`
  padding-top: 4px;
  padding-left: 4px;
  font-size: 14px;
  color: red;
  font-family: Rubik;
`;
export const ReportPanel = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: rgba(91, 182, 177, 0.1);
  padding: 16px 49px 16px 16px;
  border-left: 4px solid #5bb6b1;
  .label {
    display: flex;
    align-items: center;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    svg {
      width: 14px;
    }
    font-size: 14px;
    color: #4c4f50;
    span {
      padding-left: 12px;
    }
  }
  .export-btn {
    padding-top: 8px;
    padding-left: 25px;
    button {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      line-height: 150%;
      font-size: 13px;
    }
  }
`;
