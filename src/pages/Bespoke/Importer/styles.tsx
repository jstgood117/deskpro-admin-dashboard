import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 0 0px 55px;
  width: 100%;
  height: 100%;
  .form-row {
    border-bottom: none;
  }
  .field-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 26px;
    .element-context {
      width: 50%;
    }
    .element-details {
      max-width: 578px;
      margin: 0;
      label {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        color: #4c4f50;
        margin-bottom: 10px;
      }
      p {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 150%;
        color: #8b9293;
        margin: 0;
        padding-left: 39px;
        padding-top: 8px;
      }
    }
  }
  .form-ctrl {
    .helpdesk {
      padding-left: 25px;
    }
    .info-link {
      position: absolute;
      right: -170px;
      width: 170px;
      top: 0px;
      & svg path {
        fill: ${props => props.theme.brandPrimary};
      }
    }
    .field-container {
      flex-direction: column;
      padding-bottom: 16px;
    }
  }
  .test-btn {
    padding-left: 45px;
    padding-bottom: 20px;
  }
  .footer {
    border-top: 1px solid ${props => props.theme.hoverColour};
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 285px;
  }
`;

export const Group = styled.div`
  flexdirection: column;
  position: relative;
`;
