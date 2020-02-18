import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { dpstyle } from '../Styled';
import Button from '../Button';
import Drawer from '../Drawer';
import Input from '../Input';
import { DrawerFooter, DrawerHeader } from '../Drawer/DrawerStyles';

export interface IHolidays {
  date: string;
  day: string;
  comment: string;
}

export interface IHolidayList {
  year: number;
  holidays: IHolidays[];
}

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

const EditFormInputTitle = styled(dpstyle.div1)`
  font-weight: 500;
  font-size: 14px;
`;

interface IProps {
  data: IHolidayList[];
}

export const HolidayList = (props: IProps) => {
  const [openedList, openHolidayList] = useState([]);
  const [isOpened, openDrawer] = useState(false);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');

  return (
    <>
      <div>
        {props.data.map((property, index) => {
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
                          onClick={() => {
                            openDrawer(true);
                          }}
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
      </div>
      <Drawer
        open={isOpened}
        onClose={() => {
          openDrawer(false);
        }}
      >
        <DrawerHeader>Edit holiday</DrawerHeader>
        <div style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 19 }}>
          <EditFormInputTitle>Date</EditFormInputTitle>
          <div style={{ paddingTop: 4 }}>
            <Input
              value={date}
              inputType='primary'
              onChange={event => setDate(event.target.value)}
            />
          </div>
        </div>
        <div style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 16 }}>
          <EditFormInputTitle>Name</EditFormInputTitle>
          <div style={{ paddingTop: 4 }}>
            <Input
              value={name}
              inputType='primary'
              onChange={event => setName(event.target.value)}
            />
          </div>
        </div>
        <DrawerFooter>
          <Button styleType='primary' size='medium'>
            Save
          </Button>
          <Button styleType='secondary' size='medium'>
            Delete
          </Button>
        </DrawerFooter>
      </Drawer>
    </>
  );
};
