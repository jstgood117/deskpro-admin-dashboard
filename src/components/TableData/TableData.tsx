import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import OverflowList from '../OverflowList/OverflowList';
import NameAndAvatar from '../Avatar/NameAndAvatar';
import Avatar from '../Avatar';
import Icon from '../Icon';
import { P1, S2 } from '../Typography';
import { TextLinkLabel } from '../Styled';
import Locale from '../Locale';
import Tooltip from '../Tooltip';
import Badge from '../Badge';
import Currency from '../Currency';
import Color from '../Color';
import ActiveAvatar from '../Avatar/ActiveAvatar';
import Relationship from '../Relationship';
import TeamOverflow from '../OverflowList/TeamOverflow';
import Attachment from '../Attachment';
import Toogle from '../Toggle';
import Input from '../Input';

interface IProps {
  type:
    | 'avatar_text'
    | 'multiple_agents'
    | 'string'
    | 'icon'
    | 'relationships'
    | 'duration'
    | 'date_time'
    | 'yes_no'
    | 'link'
    | 'toogle'
    | 'attachment'
    | 'locale'
    | 'team'
    | 'multiple_teams'
    | 'count'
    | 'id'
    | 'timezone'
    | 'label'
    | 'currency'
    | 'code'
    | 'color'
    | 'input';
  props: any;
}
const TableData: React.SFC<IProps> = ({ type, props }) => {
  switch (type) {
    case 'avatar_text':
      return <NameAndAvatar name={props.name} avatar={props.avatar} />;

    case 'multiple_agents':
      const max = props.max || 3;
      return (
        <OverflowList
          max={max}
          viewMode={props.viewMode}
          renderItem={(item, index) => (
            <ActiveAvatar
              key={item.id}
              active={item.active}
              name={item.name}
              avatar={item.avatar}
              activeColor={props.activeColor}
              position={props.position}
              avatarProps={props.avatarProps}
            />
          )}
          items={props.teams}
        />
      );

    case 'string':
      return (
        <OverflowList
          max={props.max || 3}
          viewMode={props.viewMode}
          overflowStyle={{ marginLeft: 8 }}
          renderItem={(item, idx) => (
            <P1 key={item}>
              <span> {idx !== 0 ? ', ' : ''}</span>
              {item}
            </P1>
          )}
          items={props.values}
        />
      );

    case 'input':
      return (
        <Input
          value={props.value}
          onChange={props.onChange}
          hasError={props.hasError}
          errorMessage={props.errorMessage}
        />
      );

    case 'relationships':
      return (
        <Relationship
          color={props.color}
          backgroundColor={props.backgroundColor}
          icon={props.iconName}
          items={props.values}
          title={props.title}
          text={props.text}
          renderItem={item => <P1 key={item}>{item}</P1>}
        />
      );

    case 'icon':
      return <Icon name={props.iconName} />;

    case 'duration':
      return <P1>{props.duration}</P1>;

    case 'date_time':
      return <P1>{props.date_time}</P1>;

    case 'yes_no':
      return props.checked ? <Icon name='check' /> : null;

    case 'link':
      return (
        <Link to={props.to}>
          <TextLinkLabel>{props.title}</TextLinkLabel>
        </Link>
      );

    case 'toogle':
      return (
        <Toogle
          checked={props.checked}
          value={props.value}
          onChange={props.onChange}
        />
      );

    case 'attachment':
      return (
        <Attachment id={props.id} onChangeFile={() => false} text={props.text} />
      );

    case 'locale':
      return <Locale code={props.code} />;

    case 'team':
      return (
        <Tooltip content={props.name} styleType='lightBox'>
          <span style={{ display: 'inline-block' }}>
            <Avatar content={props.avatar} type='image' />
          </span>
        </Tooltip>
      );

    case 'multiple_teams':
      return (
        <TeamOverflow
          max={props.max || 3}
          items={props.teams}
          styleType={props.styleType}
        />
      );

    case 'count':
      return <P1>{props.count}</P1>;

    case 'id':
      return (
        <S2 style={{ opacity: 0.3, position: 'absolute', bottom: 0, right: 0 }}>
          {props.id}
        </S2>
      );

    case 'timezone':
      return <P1>{props.timezone}</P1>;

    case 'label':
      return (
        <Badge color={props.color} backgroundColor={props.backgroundColor}>
          {props.label}
        </Badge>
      );

    case 'currency':
      return <Currency currency={props.currency} value={props.value} />;

    case 'code':
      return (
        <Badge
          color={props.color || '#1C3E55'}
          backgroundColor={props.backgroundColor || '#E8EBEE'}
        >
          <FormattedMessage id={props.code} />
        </Badge>
      );

    case 'color':
      return <Color color={props.color} label={props.label} />;

    default:
      return null;
  }
};

export default TableData;