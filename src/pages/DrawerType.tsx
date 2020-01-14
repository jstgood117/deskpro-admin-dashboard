import React, { SFC, useState } from 'react';
import Drawer from '../components/Drawer';
import EditAgentForm from '../components/Drawer/Forms/EditAgentForm';

type Props = {
  path: string;
  pageType: string;
  metadataQuery: string;
};

const getDrawerChildComponent = (pageType: string) => {

  switch (pageType) {
    case 'EditAgentForm':
    default:
      return (
        <EditAgentForm />
      );
  }
};

const DrawerType: SFC<Props> = ({
  pageType
}) => {
  const [open, setOpen] = useState(true);
  const Content = getDrawerChildComponent(pageType);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer open={open} onClose={onClose}>
      {Content}
    </Drawer>
  );
};

export default DrawerType;
