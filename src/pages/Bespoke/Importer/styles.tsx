import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  position: relative;
  .form-row {
    border-bottom: none;
    min-width: unset;
    .sub-container {
      display: flex;
      flex-direction: column;
      width: -webkit-fill-available;
      .field-container {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding-bottom: 11px;
        .element-context {
          width: 50%;
        }
        .element-details {
          max-width: 578px;
          margin: 0;
          .element-details-label {
            margin: 0;
          }
          p {
            font-family: Rubik;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 150%;
            color: #8b9293;
            margin: 0;
            padding-left: 45px;
            padding-top: 8px;
            margin-bottom: 16px;
          }
        }
      }
    }
    .form-ctrl {
      &:nth-child(3) {
        padding-top: 8px;
      }
      .helpdesk {
        padding-left: 31px;
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
      .form-row {
        .field-container {
          flex-direction: column;
          padding-bottom: 0;
        }
      }
      .form-item {
        position: relative;
      }
      .test-btn {
        padding-left: 45px;
        padding-bottom: 20px;
      }
    }
  }
  .form-row::after {
    content: none;
  }
  .footer {
    .divider {
      height: 10px;
      position: absolute;
      width: 100%;
      left: 0px;
      right: 0px;
      border-top: 1px solid ${props => props.theme.hoverColour};
    }
    position: relative
    display: flex;
    flex-direction: column;
    .import-btn {
      padding-left: 290px;
      padding-top: 16px;
    }
    background: ${props => props.theme.white};
    width: 100%;
    height: 70px;
    align-items: center;
  }
`;

export const Group = styled.div`
  position: relative;
`;
