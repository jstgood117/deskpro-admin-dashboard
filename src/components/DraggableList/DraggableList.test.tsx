import React, { useState } from 'react';
import { mount, shallow } from '../../test/enzyme';

import DraggableList from './DraggableList';

describe('DraggableList', () => {
  let props: { items: string[] };
  let mountedDraggableList: any;

  const DraggableListComponent: React.FC<{
    items: string[];
  }> = _props => {
    const [SortList, SetList] = useState(_props.items);
    return (
      <DraggableList
        items={SortList}
        SetList={(values: any) => {
          SetList(values);
        }}
      />
    );
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedDraggableList) {
      mountedDraggableList = bShallow
        ? shallow(<DraggableListComponent {...props} />)
        : mount(<DraggableListComponent {...props} />);
    }
    return mountedDraggableList;
  };

  beforeEach(() => {
    props = {
      items: [
        'admin.settings.draggable.from',
        'admin.settings.draggable.replyTo',
        'admin.settings.draggable.xOriginalFrom'
      ]
    };
    mountedDraggableList = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
