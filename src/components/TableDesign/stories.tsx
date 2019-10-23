import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from './TableDesign';
import { testTableData } from '../../resources/constants';
import Checkbox from '../Checkbox';
import Avatar from '../Avatar';

const getRandomColor = (): string => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const TableDesignComponent: React.SFC = () => {
  const [selected, setSelected] = useState([]);

  const onSelect = (id: number) => {
    const list = selected.includes(id)
      ? selected.filter(item => item !== id)
      : [...selected, id];
    setSelected(list);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell container="head" />
          <TableCell container="head">Name</TableCell>
          <TableCell container="head">Email</TableCell>
          <TableCell container="head">Phone</TableCell>
          <TableCell container="head">Access</TableCell>
          <TableCell style={{ width: 100 }} container="head">
            Team
          </TableCell>
          <TableCell container="head">Permission Group</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {testTableData.map((item, index) => (
          <TableRow key={item.id} isSelected={selected.includes(item.id)}>
            <TableCell>
              <Checkbox
                size={11}
                containerStyle={{ marginLeft: 10 }}
                checked={selected.includes(item.id)}
                onChange={() => onSelect(item.id)}
              />
            </TableCell>
            <TableCell>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar type="image" content={item.avatar} />
                {item.name}
              </div>
            </TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.access}</TableCell>
            <TableCell>
              <Avatar
                textSize={18}
                type="text"
                textBackgroundColor={getRandomColor()}
                textColor="#fff"
                content={item.team}
              />
            </TableCell>
            <TableCell>{item.permission_group}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

storiesOf('Table Design', module).add('with dummy data', () => {
  return <TableDesignComponent />;
});