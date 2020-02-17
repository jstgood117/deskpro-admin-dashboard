import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { dpstyle } from '../Styled';
import Button from '../Button';

interface IHolidays {
  date: string;
  day: string;
  comment: string;
}

interface IHolidayList {
  year: number;
  holidays: IHolidays[];
}

const data: IHolidayList[] = [
  {
    year: 2020,
    holidays: [
      { date: '1 January', day: 'Wednesday', comment: 'New Year\'s day' },
      { date: '10 April', day: 'Friday', comment: 'Good Friday' },
      { date: '13 April', day: 'Monday', comment: 'Easter Monday' },
      {
        date: '8 May',
        day: 'Friday',
        comment: 'Early May bank holiday(VE day)'
      },
      { date: '25 May', day: 'Monday', comment: 'Spring bank holiday' }
    ]
  },
  {
    year: 2019,
    holidays: [
      { date: '1 January', day: 'Wednesday', comment: 'New Year\'s day' },
      { date: '10 April', day: 'Friday', comment: 'Good Friday' },
      { date: '13 April', day: 'Monday', comment: 'Easter Monday' },
      {
        date: '8 May',
        day: 'Friday',
        comment: 'Early May bank holiday(VE day)'
      },
      { date: '25 May', day: 'Monday', comment: 'Spring bank holiday' }
    ]
  }
];

const Year = styled(dpstyle.div1)`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  height: 24px;
  cursor: pointer;
  svg {
    width: 12px;
    height: 10px;
    path {
      fill: ${props => props.theme.static2Colour};
    }
  }
  padding-left: 8px;
  padding-right: 8px;
`;

const Holiday = styled(dpstyle.div1)`
  display: flex;
  font-size: 14px;
  align-items: center;
  padding-left: 8px;
  padding-right: 66px;
  position: relative;
  height: 39px;
  border-bottom: 1px solid ${props => props.theme.greyLighter};
  .date {
    flex: 3;
  }
  .day {
    flex: 3;
  }
  .comment {
    flex: 6;
  }
  .button-group {
    position: absolute;
    right: 8px;
    display: none;
    flex: 1;
    justify-content: flex-end;
    .action-button.remove {
      padding-left: 8px;
    }
    .action-button {
      button {
        width: 24px;
        height: 24px;
      }
    }
  }
  &:hover {
    background: rgba(232, 235, 238, 0.5);
    .button-group {
      display: flex;
    }
  }
`;

export const HolidayList = () => {
  const [openedList, openHolidayList] = useState([]);
  return (
    <>
      {data.map((property, index) => {
        const opIndex = openedList.findIndex(
          (option: IHolidayList) => option.year === property.year
        );
        let temp = [...openedList];
        return (
          <div key={index}>
            <Year
              onClick={() => {
                if (opIndex === -1) {
                  temp = [...temp, property];
                } else {
                  temp.splice(opIndex, 1);
                }
                openHolidayList([...temp]);
              }}
            >
              <div>{property.year}</div>
              {opIndex !== -1 ? <Icon name='up' /> : <Icon name='down' />}
            </Year>
            <div style={{ marginTop: 9 }}>
              {opIndex !== -1 &&
                property.holidays.map((holiday, holidayIndex) => (
                  <Holiday key={holidayIndex}>
                    <div className='date'>{holiday.date}</div>
                    <div className='day'>{holiday.day}</div>
                    <div className='comment'>{holiday.comment}</div>
                    <div className='button-group'>
                      <Button
                        styleType='tertiary'
                        size='small'
                        iconOnly={true}
                        className='action-button edit'
                      >
                        <Icon name='pencil' />
                      </Button>
                      <Button
                        styleType='tertiary'
                        size='small'
                        iconOnly={true}
                        className='action-button remove'
                      >
                        <Icon name='trash' />
                      </Button>
                    </div>
                  </Holiday>
                ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
