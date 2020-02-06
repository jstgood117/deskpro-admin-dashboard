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
          max-width: 623px;
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
      .form-ctrl {
        display: flex;
        .check-btn,
        .log-btn {
          padding-left: 45px;
        }
      }
    }
  }
  .form-row::after {
    content: none;
  }
`;
