import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  position: relative;
  button {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #1c3e55;
  }
  .form-row {
    border-bottom: none;
    min-width: unset;
    .sub-container {
      padding-left: 40px;
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
      }
      .form-ctrl.inside-group {
        padding-left: 45px;
        padding-right: 49px;
        flex-direction: column;
        display: flex;
        .log-btn {
          padding-top: 24px;
          padding-bottom: 16px;
        }
      }
      .form-ctrl.file-log {
        display: flex;
        flex-direction: column;
        margin-left: 45px;
        margin-right: 49px;
        padding: 0px 11px 0px 11px;
        background: #ffffff;
        border: 1px solid #eff0f0;
        box-sizing: border-box;
        border-radius: 4px;
        li {
          font-family: Lato;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 150%;
          align-items: center;
        }
      }
      .form-ctrl.board {
        padding-top: 24px;
      }
    }
  }
  .form-row::after {
    content: none;
  }
`;

export const ProgressLabel = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #4c4f50;
  padding-bottom: 17px;
`;
