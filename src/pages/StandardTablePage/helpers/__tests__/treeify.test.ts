import {treeify} from '../treeify';

import { testData1 } from '../../../../fixtures/treeify/testData1';
import { testData2 } from '../../../../fixtures/treeify/testData2';

describe('treeify',() => {
  test('returns tree structure when given KeyValue[], each element having a `parent` prop', () => {
    const result = treeify(testData1);

    expect(result).toEqual([
      {
        'id':'awaiting_agent',
        'sys_id':'awaiting_agent',
        'parent':null,
        'status_type':'awaiting_agent',
        'depth':0,
        'title':'Awaiting Agent',
        'display_order':-6,
        'effective_display_order':0,
        'children':[]
      },
      {
        'id':'awaiting_user',
        'sys_id':'awaiting_user',
        'parent':null,
        'status_type':'awaiting_user',
        'depth':0,
        'title':'Awaiting User',
        'display_order':-5,
        'effective_display_order':1,
        'children':[]
      },
      {
        'id':'pending',
        'sys_id':'pending',
        'parent':null,
        'status_type':'pending',
        'depth':0,
        'title':'Pending',
        'display_order':-4,
        'effective_display_order':2,
        'children':[]
      },
      {
        'id':'resolved',
        'sys_id':'resolved',
        'parent':null,
        'status_type':'resolved',
        'depth':0,
        'title':'Resolved',
        'display_order':-3,
        'effective_display_order':3,
        'children':[]
      },
      {
        'id':'archived',
        'sys_id':'archived',
        'parent':null,
        'status_type':'archived',
        'depth':0,
        'title':'Archived',
        'display_order':-2,
        'effective_display_order':4,
        'children':[]
      },
      {
        'id':'hidden',
        'sys_id':'hidden',
        'parent':null,
        'status_type':'hidden',
        'depth':0,
        'title':'Hidden',
        'display_order':-1,
        'effective_display_order':5,
        'children':[
          {
            'id':'hidden.1',
            'sys_id':'deleted',
            'parent':{
              'id':'hidden'
            },
            'status_type':'hidden',
            'depth':1,
            'title':'Deleted',
            'display_order':0,
            'effective_display_order':6,
            'children':[]
          },
          {
            'id':'hidden.2',
            'sys_id':'spam',
            'parent':{
              'id':'hidden'
            },
            'status_type':'hidden',
            'depth':1,
            'title':'Spam',
            'display_order':0,
            'effective_display_order':7,
            'children':[]
          }
        ]
      }
    ]);
  });

  test('if `id`, `custom_parent` and `custom_children`, use them to locate children and store in final structure.', () => {

    const result = treeify(testData2, 'id', 'custom_parent', 'custom_children');

    expect(result).toEqual([
      {
        'id':'hidden',
        'sys_id':'hidden',
        'custom_parent':null,
        'status_type':'hidden',
        'depth':0,
        'title':'Hidden',
        'display_order':-1,
        'effective_display_order':5,
        'custom_children':[
          {
            'id':'hidden.1',
            'sys_id':'deleted',
            'custom_parent':{
              'id':'hidden'
            },
            'status_type':'hidden',
            'depth':1,
            'title':'Deleted',
            'display_order':0,
            'effective_display_order':6,
            'custom_children':[]
          },
          {
            'id':'hidden.2',
            'sys_id':'spam',
            'custom_parent':{
              'id':'hidden'
            },
            'status_type':'hidden',
            'depth':1,
            'title':'Spam',
            'display_order':0,
            'effective_display_order':7,
            'custom_children':[]
          }
        ]
      }
    ]);
  });
});