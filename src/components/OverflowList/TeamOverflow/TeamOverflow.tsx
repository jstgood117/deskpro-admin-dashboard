import React from 'react';
import styled from 'styled-components';

import OverflowList from '../OverflowList';
import Avatar from '../../Avatar';
import NameAndAvatar from '../../Avatar/NameAndAvatar';
import Tooltip from '../../Tooltip';
import { S1 } from '../../Typography';
import Label from '../../Label';

const containerStyle = {
  marginRight: 8,
  marginTop: 4,
  marginBottom: 4
};

const BadeImage = styled.img`
  width: 16px;
  height: 16px;
  margin-left: -5px;
  margin-right: 5px;
  border-radius: 3px;
  object-fit: cover;
`;

const List = styled.div`
  ${S1} {
    color: ${props => props.theme.static2Colour};
  }
  div {
    padding: 2px 0;
  }
`;

export interface IProps {
  max: number;
  items: any[];
  styleType: 'avatar' | 'name-avatar' | 'label';
}

const TeamOverflow: React.FC<IProps> = ({
  max,
  items = [],
  styleType = 'avatar'
}) => {
  const renderItem = (item: any, index: number) => {
    let component = null;
    switch (styleType) {
      case 'avatar':
        component = (
          <Avatar
            style={containerStyle}
            textBackgroundColor={item.textBackgroundColor}
            textColor={item.textColor}
            type='text'
            content={item.name}
          />
        );
        break;

      case 'name-avatar':
        component = (
          <NameAndAvatar
            containerStyle={containerStyle}
            avatar={item.avatar}
            name={item.name}
          />
        );
        break;

      case 'label':
        component = (
          <div style={containerStyle}>
            <Label
              label={item.name}
              styleType='filled'
              styles={{
                backgroundColor: item.textBackgroundColor,
                color: item.textColor
              }}
              showBoxShadow={true}
            >
              {item.avatar && <BadeImage src={item.avatar} />}
            </Label>
          </div>
        );
        break;

      default:
        break;
    }

    return (
      <Tooltip
        key={item.id}
        styleType='lightBox'
        content={(
          <List>
            <S1>Team members</S1>
            {items.map((member: any) => (
              <NameAndAvatar
                key={member.id}
                name={member.name}
                avatar={member.avatar}
              />
            ))}
          </List>
        )}
      >
        <span>{component}</span>
      </Tooltip>
    );
  };

  return <OverflowList max={max} items={items} renderItem={renderItem} />;
};

export default TeamOverflow;
