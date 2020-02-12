import React, { useState } from 'react';

import Drawer from '../../Drawer';

import { GenericFormComponent } from '../GenericFormComponent';
import FieldContainer from './FieldContainer';

const DrawerSection = (props: any) => {
  const [open, setOpen] = useState(props.open);

  /*
  const showDrawer = () => {
    setOpen(true);
  };
  */

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div className='drawer-section'>
      <Drawer open={open} onClose={closeDrawer} className={props.className}>
        {props.elements.map((element: any, i: number) => (
          <React.Fragment key={i}>
            {element.type === 'field' ? (
              <FieldContainer {...element} formikProps={props.formikProps} />
            ) : (
              <GenericFormComponent
                {...element}
                formikProps={props.formikProps}
              />
            )}
          </React.Fragment>
        ))}
      </Drawer>
    </div>
  );
};

export default DrawerSection;
